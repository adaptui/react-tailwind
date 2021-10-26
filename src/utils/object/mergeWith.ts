// Types from lodash & simplified function from tailwindcss
import { isObject } from "../assertions";

type MergeWithCustomizer = {
  bivariantHack(
    value: any,
    srcValue: any,
    key: string,
    object: any,
    source: any,
  ): any;
}["bivariantHack"];
// TODO: Probably should just put all these methods on Object and forget about it.
// oh, except for Collection<any> I GUESS

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined` merging is handled by the
 * method instead. The `customizer` is invoked with seven arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * @category Object
 * @param object The destination object.
 * @param sources The source objects.
 * @param customizer The function to customize assigned values.
 * @returns Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = {
 *   'fruits': ['apple'],
 *   'vegetables': ['beet']
 * };
 *
 * var other = {
 *   'fruits': ['banana'],
 *   'vegetables': ['carrot']
 * };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
 */
export function mergeWith<TObject, TSource>(
  object: TObject,
  source: TSource,
  customizer: MergeWithCustomizer,
): TObject & TSource;
export function mergeWith<TObject, TSource1, TSource2>(
  object: TObject,
  source1: TSource1,
  source2: TSource2,
  customizer: MergeWithCustomizer,
): TObject & TSource1 & TSource2;
export function mergeWith<TObject, TSource1, TSource2, TSource3>(
  object: TObject,
  source1: TSource1,
  source2: TSource2,
  source3: TSource3,
  customizer: MergeWithCustomizer,
): TObject & TSource1 & TSource2 & TSource3;
export function mergeWith<TObject, TSource1, TSource2, TSource3, TSource4>(
  object: TObject,
  source1: TSource1,
  source2: TSource2,
  source3: TSource3,
  source4: TSource4,
  customizer: MergeWithCustomizer,
): TObject & TSource1 & TSource2 & TSource3 & TSource4;
export function mergeWith(object: any, ...otherArgs: any[]): any;
export function mergeWith(target: any, ...sources: any[]) {
  let customizer = sources.pop();

  for (let source of sources) {
    for (let k in source) {
      let merged = customizer(target[k], source[k]);

      if (merged === undefined) {
        if (isObject(target[k]) && isObject(source[k])) {
          target[k] = mergeWith(target[k], source[k], customizer);
        } else {
          target[k] = source[k];
        }
      } else {
        target[k] = merged;
      }
    }
  }

  return target;
}
