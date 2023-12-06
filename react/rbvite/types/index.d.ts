type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};

type Cart = { id: number; name: string; price: number };
type LoginUser = { id: number; name: string };
