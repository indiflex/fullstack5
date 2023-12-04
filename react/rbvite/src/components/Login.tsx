import { FormEvent, useEffect, useRef } from 'react';
import { LoginUser } from '../App';

type Props = {
  login: ({ id, name }: LoginUser) => void;
};

const Login = ({ login }: Props) => {
  // const [id, setId] = useState(0);
  // const [name, setName] = useState('');
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  // const setUserId = (e: ChangeEvent<HTMLInputElement>) => {
  //   setId(+e.currentTarget.value);
  // };
  // const setUserName = (e: ChangeEvent<HTMLInputElement>) => {
  //   setName(e.currentTarget.value);
  // };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Number(idRef.current?.value);
    const name = nameRef.current?.value || '';
    console.log('🚀  name:', name);
    login({ id, name });
  };

  const focusName = () => {
    if (nameRef.current) nameRef.current.focus();
  };

  useEffect(() => {
    if (idRef.current) idRef.current.value = '100';
    focusName();
  }, []);

  return (
    <form onSubmit={(e) => submit(e)}>
      <div>
        Login ID(숫자):
        {/* <input type='number' value={id} onChange={setUserId} /> */}
        <input type='number' ref={idRef} />
      </div>
      <div>
        Login Name: <input type='text' ref={nameRef} />
      </div>
      <button type='submit'>Login</button>
    </form>
  );
};
export default Login;
