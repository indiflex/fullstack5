import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSession } from '../hooks/session-context';
import { useEffect, useState } from 'react';
// import { useSession } from '../hooks/session-context';

export const Item = () => {
  const {
    session: { cart },
  } = useSession();
  const { id } = useParams();
  // console.log('🚀  id:', id);

  const location = useLocation();
  const { state: itemState } = location;
  // const {currItem} = useOutletContext<>();
  // console.log('🚀  itemState:', itemState);
  const [item, setItem] = useState<Cart | undefined>(undefined);

  const navigate = useNavigate();
  useEffect(() => {
    const _item = itemState || cart.find((item) => item.id === Number(id));
    if (!_item) navigate('/items');
    setItem(_item);
  }, [item, navigate, cart, id, itemState]);

  return (
    <>
      {item?.id}. {item?.name} (₩{item?.price.toLocaleString()})
      <button>Edit</button>
    </>
  );
};
