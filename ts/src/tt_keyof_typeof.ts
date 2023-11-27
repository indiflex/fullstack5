// 문제1) 다음에서 T1과 동일한 타입으로 T2를 정의하시오.

const myCart = {
  X: 1,
  Y: 2,
  Z: 3,
};

type T1 = 'X' | 'Y' | 'Z';
type T2 = keyof typeof myCart;

const constCart = {
  X: 1,
  Y: 2,
  Z: 3,
} as const;

type XXX = Omit<typeof myCart, 'Z'>;

type T3 = 1 | 2 | 3;
type T4 = (typeof constCart)[keyof typeof constCart];
