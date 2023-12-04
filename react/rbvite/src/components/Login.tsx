import { ChangeEvent, useState } from 'react';
import { LoginUser } from '../App';

type Props = {
  login: ({ id, name }: LoginUser) => void;
};

const Login = ({ login }: Props) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');

  console.log('@@@Login');

  const setUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(+e.currentTarget.value);
  };
  const setUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  return (
    <>
      <div>
        Login ID(숫자):
        <input type='number' value={id} onChange={setUserId} />
      </div>
      <div>
        Login Name: <input type='text' value={name} onChange={setUserName} />
      </div>
      <button onClick={() => login({ id, name })}>Login</button>
    </>
  );
};
export default Login;
