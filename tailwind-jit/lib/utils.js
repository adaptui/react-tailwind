const postcss = require('postcss')

// Takes our lightweight rule structure and turns it into a PostCSS node.
// This is likely a hot path and should be as optimized as possible. We
// use a cache for the actual rules so that we are never recreating them
// if we've already done the work, but we need to be careful we don't
// mutate these nodes after we get them because we reuse the same
// reference.
function toPostCssNode(rule, postCssNodeCache) {
  if (postCssNodeCache.has(rule)) {
    return postCssNodeCache.get(rule)
  }

  let [selector, childRule] = rule
  let node

  if (selector[0] === '@') {
    let name = selector.slice(1, selector.indexOf(' '))
    let params = selector.slice(selector.indexOf(' ') + 1)
    node = postcss.atRule({ name, params })

    if (Array.isArray(childRule)) {
      // It's a rule tuple
      node.append(
        childRule.map((rule) => {
          return toPostCssNode(rule, postCssNodeCache)
        })
      )
    } else {
      // It's an object, like pairs in keyframes
      for (let property in childRule) {
        node.append(
          postcss.decl({
            prop: property,
            value: childRule[property],
          })
        )
      }
    }
  } else {
    // Regular rule (like a class), children are definitely declarations,
    // not other rules
    node = postcss.rule({
      selector: rule[0],
      nodes: Object.entries(rule[1]).map(([prop, value]) => {
        return postcss.decl({ prop, value })
      }),
    })
  }

  postCssNodeCache.set(rule, node)

  return node
}

function bigSign(bigIntValue) {
  return (bigIntValue > 0n) - (bigIntValue < 0n)
}

function isPlainObject(value) {
  if (Object.prototype.toString.call(value) !== '[object Object]') {
    return false
  }

  const prototype = Object.getPrototypeOf(value)
  return prototype === null || prototype === Object.prototype
}

module.exports = {
  toPostCssNode,
  bigSign,
  isPlainObject,
}
