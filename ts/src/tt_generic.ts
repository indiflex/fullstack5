interface IUser {
  id: number;
  age: number;
  name: string;
}

const hong: IUser = { id: 1, name: 'Hong', age: 32 };

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}

type Change<T, K extends keyof T, U> = {
  [k in keyof T]: k extends K ? U : T[k];
};

type DeptCaptain = Change<IDept, 'captain' | 'id', IUser>;
// type Err = Change<IDept, 'somekey', IUser>; // Error!!!

type Combine<T, U> = {
  [k in keyof (T & U)]: k extends keyof T & keyof U ? T[k] | U[k] : (T & U)[k];
};

type ICombined = Combine<IUser, IDept>;

// --------------------------------
type Item = { item: string; price: number };
type ItemPrice<T, U> = {
  [k in keyof T]: k extends 'item' ? keyof U : T[k];
};

const stock = { X: 1, Y: 2, Z: 30 };

const itemPrices: ItemPrice<Item, typeof stock>[] = [
  { item: 'X', price: 1000 },
  { item: 'Y', price: 2000 },
  { item: 'Z', price: 3000 },
];

const total = itemPrices.reduce(
  (curr, itemPrice) => curr + stock[itemPrice.item] * itemPrice.price,
  0
);

export {};
