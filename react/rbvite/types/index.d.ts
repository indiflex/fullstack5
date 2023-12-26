type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};

type Cart = { id: number; name: string; price: number };
type LoginUser = { id: number; name: string };

type SaveCartItem = (id: number, name: string, price: number) => number;
type RemoveCartItem = (id: number) => void;

type NumberVoidFn = (id: number) => void;
type VoidFn = () => void;
