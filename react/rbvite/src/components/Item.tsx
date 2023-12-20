import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useSession } from '../hooks/session-context';
// import { useSession } from '../hooks/session-context';

export const Item = () => {
  const {
    session: { cart },
  } = useSession();
  const { id } = useParams();
  console.log('🚀  id:', id);

  const location = useLocation();
  console.log('🚀  location:', location);

  const { name, price } =
    location.state || cart.find((item) => item.id === Number(id));

  const [searchParams, setSearchParams] = useSearchParams({ aaa: 'x' });
  console.log('🚀  aaa:', searchParams.get('aaa'));

  return (
    <>
      {id}. {name} (₩{price.toLocaleString()})
      <button onClick={() => setSearchParams({ aaa: 'X' })}>SSS</button>
    </>
  );
};
