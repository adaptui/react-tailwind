import components from "./components";

type Components = { components: typeof components };

type getTs<K extends object, S extends string> = string extends S
  ? unknown
  : S extends `${infer P1}.${infer P2}`
  ? K[P1] extends object
    ? getTs<K[P1], P2>
    : K[P1]
  : K[S];

// eslint-disable-next-line import/no-anonymous-default-export
export default function <S extends string>(s: S): getTs<Components, S>;
