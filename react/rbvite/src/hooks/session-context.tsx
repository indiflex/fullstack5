import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type SessionContextProp = {
  session: Session;
  login: ({ id, name }: LoginUser) => void;
  logout: () => void;
  saveCartItem: (id: number, name: string, price: number) => void;
  removeCartItem: (id: number) => void;
};

const DEFAULT_SESSION = {
  loginUser: null,
  cart: [],
};

const SessionContext = createContext<SessionContextProp>({
  session: DEFAULT_SESSION,
  login: () => {},
  logout: () => {},
  saveCartItem: () => {},
  removeCartItem: () => {},
});

export const SessionContextProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session>(DEFAULT_SESSION);

  const url = '/data/sample-logined.json';
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetch(url, { signal })
      .then((res) => res.json())
      .then((data) => setSession(data));

    return () => controller.abort();
  }, []);

  // const loginHandleRef = useRef<LoginHandle>(null);

  const login = ({ id, name }: LoginUser) => {
    if (!name) {
      alert('Input User Name, please.');
      // loginHandleRef.current?.focusName();
      return;
    }
    setSession({ ...session, loginUser: { id, name } });
  };

  const logout = () => {
    setSession({ ...session, loginUser: null });
  };

  const saveCartItem = (id: number, name: string, price: number) => {
    // const id =
    //   session.cart
    //     .map((cart) => cart.id)
    //     .sort()
    //     .at(-1) || 0;

    const { cart } = session;
    id = id || Math.max(...session.cart.map((cart) => cart.id), 0) + 1;
    const item = cart.find((item) => item.id === id);
    if (item) {
      item.name = name;
      item.price = price;
    } else {
      cart.push({ id, name, price });
    }

    setSession({
      ...session,
      cart: [...cart],
    });
  };

  const removeCartItem = (itemId: number) => {
    setSession({
      ...session,
      cart: session.cart.filter((item) => item.id !== itemId),
    });
  };

  return (
    <SessionContext.Provider
      value={{ session, login, logout, saveCartItem, removeCartItem }}
    >
      {children}
    </SessionContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSession = () => useContext(SessionContext);
