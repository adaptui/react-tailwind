import { DefaultTheme } from "..";

// https://stackoverflow.com/questions/60795256/typescript-type-merging
// https://dev.to/svehla/typescript-how-to-deep-merge-170c

/**
 * Take two objects T and U and create the new one with uniq keys for T a U objectI
 * helper generic for `DeepMergeTwoTypes`
 */
type GetObjDifferentKeys<T, U> = Omit<T, keyof U> & Omit<U, keyof T>;

/**
 * Take two objects T and U and create the new one with the same objects keys
 * helper generic for `DeepMergeTwoTypes`
 */
type GetObjSameKeys<T, U> = Omit<T | U, keyof GetObjDifferentKeys<T, U>>;

type Merge<T, U> =
  // non shared keys are optional
  Partial<GetObjDifferentKeys<T, U>> &
    // shared keys are recursively resolved by `DeepMergeTwoTypes<...>`
    { [K in keyof GetObjSameKeys<T, U>]: DeepMerge<T[K], U[K]> };

// it merge 2 static types and try to avoid of unnecessary options (`'`)
export type DeepMerge<T, U> =
  // check if generic types are arrays and unwrap it and do the recursion
  [T, U] extends [(infer TItem)[], (infer UItem)[]]
    ? DeepMerge<TItem, UItem>[]
    : // check if generic types are objects
    [T, U] extends [{ [key: string]: unknown }, { [key: string]: unknown }]
    ? Merge<T, U>
    : [T, U] extends [
        { [key: string]: unknown } | undefined,
        { [key: string]: unknown } | undefined,
      ]
    ? Merge<NonNullable<T>, NonNullable<U>> | undefined
    : T | U;

interface _ComponentDefaultTheme {
  components: DefaultTheme;
}
export declare namespace Renderlesskit {
  interface Theme extends _ComponentDefaultTheme {}
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
