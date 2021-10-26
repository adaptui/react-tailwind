// Types from lodash & simplified function from tailwindcss
/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @since 0.1.0
 * @category Object
 * @param object The destination object.
 * @param sources The source objects.
 * @returns Returns `object`.
 * @example
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 })
 * // => { 'a': 1, 'b': 2 }
 */
export function defaults<TObject, TSource>(
  object: TObject,
  source: TSource,
): NonNullable<TSource & TObject>;
export function defaults<TObject, TSource1, TSource2>(
  object: TObject,
  source1: TSource1,
  source2: TSource2,
): NonNullable<TSource2 & TSource1 & TObject>;
export function defaults<TObject, TSource1, TSource2, TSource3>(
  object: TObject,
  source1: TSource1,
  source2: TSource2,
  source3: TSource3,
): NonNullable<TSource3 & TSource2 & TSource1 & TObject>;
export function defaults<TObject, TSource1, TSource2, TSource3, TSource4>(
  object: TObject,
  source1: TSource1,
  source2: TSource2,
  source3: TSource3,
  source4: TSource4,
): NonNullable<TSource4 & TSource3 & TSource2 & TSource1 & TObject>;
export function defaults<TObject>(object: TObject): NonNullable<TObject>;
export function defaults(object: any, ...sources: any[]): any;
export function defaults(target: any, ...sources: any[]): any {
  for (let source of sources) {
    for (let k in source) {
      if (!target?.hasOwnProperty?.(k)) {
        target[k] = source[k];
      }
    }
  }

  return target;
}
