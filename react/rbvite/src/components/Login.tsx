import {
  FormEvent,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { useSession } from '../hooks/session-context';
import { useCounter } from '../hooks/counter-context';

export type LoginHandle = {
  focusName: () => void;
};

const Login = forwardRef((_, handleRef) => {
  // const [id, setId] = useState(0);
  // const [name, setName] = useState(() => {
  //   console.log('init name!!!');
  //   return 'HONG';
  // });
  const { login } = useSession();
  const { count, plusCount, minusCount } = useCounter();
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    plusCount();
    console.log('Login Please...', count);

    return () => {
      minusCount();
      console.log('login-cleanup-code!!', count);
    };
  }, []);

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
    // console.log('🚀  name:', name);
    login({ id, name });
  };

  const focusName = () => {
    if (nameRef.current) nameRef.current.focus();
  };

  useImperativeHandle(handleRef, () => ({
    focusName,
  }));

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
});
export default Login;