// import { useEffect } from 'react';
// import { useFetch } from '../hooks/fetch-hook';
import { useSession } from '../hooks/session-context';

const Profile = () => {
  // console.log('@@@Profile');
  const {
    logout,
    session: { loginUser },
  } = useSession();

  // const url = '/data/sample.json';
  // const data = useFetch<Session>(url);
  // useEffect(() => {
  //   if (data) console.log('🚀  data:', data);
  // }, [data]);

  return (
    <>
      <div>
        User Name: <strong>{loginUser?.name}</strong>
      </div>
      <button onClick={logout}>Logout</button>
    </>
  );
};
export default Profile;
