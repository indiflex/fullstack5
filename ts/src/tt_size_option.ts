// 1) const SIZE: {id: 'X' | 'Y' | 'Z'; price: number}[] = [
// 2) as const
// 3) cart[size.id as XYZ]
// 4) index signature ==> (cart[size.id] ?? 0)

type XYZ = 'X' | 'Y' | 'Z';

// <문제 원본>
// const SIZE = [
//   { id: 'X', price: 1000 },
//   { id: 'Y', price: 2000 },
//   { id: 'Z', price: 3000 },
// ];

// <방법1>
// const SIZE: { id: XYZ; price: number }[] = [
//   { id: 'X', price: 1000 },
//   { id: 'Y', price: 2000 },
//   { id: 'Z', price: 3000 },
// ];

// <방법2>
// const SIZE = [
//   { id: 'X', price: 1000 },
//   { id: 'Y', price: 2000 },
//   { id: 'Z', price: 3000 },
// ] as const;

// <방법4>
// type Cart = {
//   [x: string]: number;
// };
// const cart: Cart = {X:1, Y:2, Z:3};

type Item = { item: string; price: number };
type ItemPrice<T, U> = {
  [k in keyof T]: k extends 'item' ? keyof U : T[k];
};

const stock = { X: 1, Y: 2, Z: 3 };
const itemPrices: ItemPrice<Item, typeof stock>[] = [
  { item: 'X', price: 1000 },
  { item: 'Y', price: 2000 },
  { item: 'Z', price: 3000 },
];

const total = itemPrices.reduce(
  (curr, size) => curr + stock[size.item] * size.price,
  0
);
