const postcss = require('postcss')
const parseObjectStyles = require('tailwindcss/lib/util/parseObjectStyles').default
const { isPlainObject, bigSign } = require('./utils')
const selectorParser = require('postcss-selector-parser')
const prefixSelector = require('tailwindcss/lib/util/prefixSelector').default

let classNameParser = selectorParser((selectors) => {
  return selectors.first.filter(({ type }) => type === 'class').pop().value
})

function getClassNameFromSelector(selector) {
  return classNameParser.transformSync(selector)
}

// Generate match permutations for a class candidate, like:
// ['ring-offset-blue', '100']
// ['ring-offset', 'blue-100']
// ['ring', 'offset-blue-100']
function* candidatePermutations(prefix, modifier = '') {
  let dashIdx = prefix.lastIndexOf('-')
  if (dashIdx === -1) {
    return
  }

  modifier = [prefix.slice(dashIdx + 1), modifier].filter(Boolean).join('-')
  prefix = prefix.slice(0, dashIdx)

  yield [prefix, modifier]

  yield* candidatePermutations(prefix, modifier)
}

function applyPrefix(matches, context) {
  if (matches.length === 0 || context.tailwindConfig.prefix === '') {
    return matches
  }

  for (let match of matches) {
    let [meta] = match
    if (meta.options.respectPrefix) {
      let container = postcss.root({ nodes: [match[1]] })
      container.walkRules((r) => {
        r.selector = prefixSelector(context.tailwindConfig.prefix, r.selector)
      })
      match[1] = container.nodes[0]
    }
  }

  return matches
}

// Takes a list of rule tuples and applies a variant like `hover`, sm`,
// whatever to it. We used to do some extra caching here to avoid generating
// a variant of the same rule more than once, but this was never hit because
// we cache at the entire selector level further up the tree.
//
// Technically you can get a cache hit if you have `hover:focus:text-center`
// and `focus:hover:text-center` in the same project, but it doesn't feel
// worth the complexity for that case.

function applyVariant(variant, matches, hasLibVariant, context) {
  if (matches.length === 0) {
    return matches
  }

  if (context.variantMap.has(variant)) {
    let [variantSort, applyThisVariant] = context.variantMap.get(variant)
    let result = []

    const updateSort = hasLibVariant && !variant.includes('sm')

    for (let [{ sort, layer, options }, rule] of matches) {
      if (options.respectVariants === false) {
        result.push([{ sort, layer, options }, rule])
        continue
      }

      let container = postcss.root({ nodes: [rule] })

      function modifySelectors(modifierFunction) {
        container.each((rule) => {
          if (rule.type !== 'rule') {
            return
          }

          rule.selectors = rule.selectors.map((selector) => {
            return modifierFunction({
              get className() {
                return getClassNameFromSelector(selector)
              },
              selector,
            })
          })
        })
        return container
      }

      let ruleWithVariant = applyThisVariant({
        container,
        separator: context.tailwindConfig.separator,
        modifySelectors,
      })

      if (ruleWithVariant === null) {
        continue
      }

      let withOffset = [
        { sort: updateSort ? 1n : variantSort | sort, layer, options },
        container.nodes[0],
      ]


      result.push(withOffset)
    }

    return result
  }

  return []
}

function parseRules(rule, cache, options = {}) {
  // PostCSS node
  if (!isPlainObject(rule) && !Array.isArray(rule)) {
    return [[rule], options]
  }

  // Tuple
  if (Array.isArray(rule)) {
    return parseRules(rule[0], cache, rule[1])
  }

  // Simple object
  if (!cache.has(rule)) {
    cache.set(rule, parseObjectStyles(rule))
  }

  return [cache.get(rule), options]
}

function* resolveMatchedPlugins(classCandidate, context) {
  if (context.candidateRuleMap.has(classCandidate)) {
    yield [context.candidateRuleMap.get(classCandidate), 'DEFAULT']
  }

  let candidatePrefix = classCandidate
  let negative = false

  if (candidatePrefix[0] === '-') {
    negative = true
    candidatePrefix = candidatePrefix.slice(1)
  }

  for (let [prefix, modifier] of candidatePermutations(candidatePrefix)) {
    if (context.candidateRuleMap.has(prefix)) {
      yield [context.candidateRuleMap.get(prefix), negative ? `-${modifier}` : modifier]
      return
    }
  }
}

function sortAgainst(toSort, against) {
  return toSort.slice().sort((a, z) => {
    return bigSign(against.get(a)[0] - against.get(z)[0])
  })
}

function* resolveMatches(candidate, context) {
  let separator = context.tailwindConfig.separator
  let [classCandidate, ...variants] = candidate.split(separator).reverse()

  let hasLibVariant = variants.includes('lib')

  // Strip prefix
  // md:hover:tw-bg-black

  // TODO: Reintroduce this in ways that doesn't break on false positives
  // let sorted = sortAgainst(variants, context.variantMap)
  // if (sorted.toString() !== variants.toString()) {
  //   let corrected = sorted.reverse().concat(classCandidate).join(':')
  //   throw new Error(`Class ${candidate} should be written as ${corrected}`)
  // }

  for (let matchedPlugins of resolveMatchedPlugins(classCandidate, context)) {
    let pluginHelpers = {
      candidate: classCandidate,
      theme: context.tailwindConfig.theme,
    }

    let matches = []
    let [plugins, modifier] = matchedPlugins

    for (let [sort, plugin] of plugins) {
      if (typeof plugin === 'function') {
        for (let ruleSet of [].concat(plugin(modifier, pluginHelpers))) {
          let [rules, options] = parseRules(ruleSet, context.postCssNodeCache)
          for (let rule of rules) {
            matches.push([
              {
                ...sort,
                options: { ...sort.options, ...options },
                sort: hasLibVariant ? 1n : sort.sort,
              },
              rule,
            ])
          }
        }
      }
      // Only process static plugins on exact matches
      else if (modifier === 'DEFAULT') {
        let ruleSet = plugin
        let [rules, options] = parseRules(ruleSet, context.postCssNodeCache)
        for (let rule of rules) {
          matches.push([
            {
              ...sort,
              options: { ...sort.options, ...options },
              sort: hasLibVariant ? 1n : sort.sort,
            },
            rule,
          ])
        }
      }
    }

    matches = applyPrefix(matches, context)

    for (let variant of variants) {
      matches = applyVariant(variant, matches, hasLibVariant, context)
    }

    for (let match of matches) {
      yield match
    }
  }
}

function inKeyframes(d) {
  return (
    d.parent.parent && d.parent.parent.type === 'atrule' && d.parent.parent.name === 'keyframes'
  )
}

function makeImportant(rule) {
  rule.walkDecls((d) => {
    if (d.parent.type === 'rule' && !inKeyframes(d)) {
      d.important = true
    }
  })
}

function generateRules(candidates, context) {
  let allRules = []

  for (let candidate of candidates) {
    if (context.notClassCache.has(candidate)) {
      continue
    }

    if (context.classCache.has(candidate)) {
      allRules.push(context.classCache.get(candidate))
      continue
    }

    let matches = Array.from(resolveMatches(candidate, context))

    if (matches.length === 0) {
      context.notClassCache.add(candidate)
      continue
    }

    context.classCache.set(candidate, matches)
    allRules.push(matches)
  }

  return allRules.flat(1).map(([{ sort, layer, options }, rule]) => {
    if (context.tailwindConfig.important === true && options.respectImportant) {
      makeImportant(rule)
    }
    return [sort | context.layerOrder[layer], rule]
  })
}

module.exports = {
  resolveMatches,
  generateRules,
}
