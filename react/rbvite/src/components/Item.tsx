import { useEffect, useReducer, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
// import { useSession } from '../hooks/session-context';

export const Item = () => {
  // const { id } = useParams();
  // console.log('🚀  id:', id);

  // const location = useLocation();
  // const { state: itemState } = location;
  // const {currItem} = useOutletContext<>();
  // console.log('🚀  itemState:', itemState);
  // const [item, setItem] = useState<Cart | undefined>(undefined);
  const { item, saveCartItem } = useOutletContext<{
    item: Cart;
    saveCartItem: SaveCartItem;
  }>();
  const [isEditing, toggleEditing] = useReducer(
    (preEditing) => !preEditing,
    false
  );

  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  // const navigate = useNavigate();
  // // console.log('**********', item);
  // useEffect(() => {
  //   const _item = itemState || cart.find((item) => item.id === Number(id));
  //   if (!_item) navigate('/items');
  //   setItem(_item);
  // }, [navigate, cart, id, itemState]);

  const editingOrSave = () => {
    if (isEditing)
      if (nameRef.current && priceRef.current) {
        saveCartItem(
          item.id || 0,
          nameRef.current.value,
          +priceRef.current.value
        );
      }

    toggleEditing();
  };

  useEffect(() => {
    if (nameRef.current && priceRef.current) {
      nameRef.current.value = item.name;
      priceRef.current.value = String(item.price);
    }
  }, [item, isEditing]);

  return (
    <>
      {!item && <h2>Select Item, plez</h2>}

      {isEditing ? (
        <form style={{ margin: '1rem' }}>
          <input type='text' ref={nameRef} />
          <input type='text' ref={priceRef} />
        </form>
      ) : (
        <div>
          {item?.id}. {item?.name} (₩{item?.price.toLocaleString()})
        </div>
      )}

      {isEditing && <button onClick={() => toggleEditing()}>Cancel</button>}
      <button onClick={editingOrSave}>{isEditing ? 'Save' : 'Edit'}</button>
    </>
  );
};
