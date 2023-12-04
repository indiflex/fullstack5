// src/components/Profile.tsx
import { LoginUser } from '../App';

type Props = {
  loginUser: LoginUser;
  logout: () => void;
};

const Profile = ({ loginUser, logout }: Props) => {
  console.log('@@@Profile');
  return (
    <>
      <div>
        User Name: <strong>{loginUser.name}</strong>
      </div>
      <button onClick={logout}>Logout</button>
    </>
  );
};
export default Profile;
