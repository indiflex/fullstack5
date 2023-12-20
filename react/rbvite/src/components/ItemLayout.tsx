import { Link, Outlet } from 'react-router-dom';
import { useSession } from '../hooks/session-context';

export const ItemLayout = () => {
  const {
    session: { cart },
    removeCartItem,
  } = useSession();

  return (
    <>
      <ul>
        {cart.map(({ id, name, price }) => (
          <li key={id}>
            <small>{id}</small>
            <Link to={`/items/${id}`} state={{ name, price }}>
              <strong>{name}</strong>
            </Link>
            <small>({price.toLocaleString()}원)</small>
            <button onClick={() => removeCartItem(id)}>X</button>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
