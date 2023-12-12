import { useSession } from '../hooks/session-context';

const Profile = () => {
  // console.log('@@@Profile');
  const {
    logout,
    session: { loginUser },
  } = useSession();
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
