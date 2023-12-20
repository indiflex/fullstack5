import Profile from './Profile';
import { useSession } from '../hooks/session-context';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const My = () => {
  // console.log('@@@My');
  const {
    session: { loginUser },
  } = useSession();

  const navigate = useNavigate();
  useEffect(() => {
    if (!loginUser) navigate('/login');
  }, [navigate, loginUser]);

  return (
    <>
      <Profile />
    </>
  );
};
export default My;
