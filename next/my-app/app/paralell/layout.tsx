import { ReactNode } from 'react';

export default function ParalellLayout({
  children,
  login,
  profile,
}: {
  children: ReactNode;
  login: ReactNode;
  profile: ReactNode;
}) {
  const didLogin = false;

  return didLogin ? (
    <div>
      <div>{children}</div>
      <hr />
      <div>{login}</div>
      <div>{profile}</div>
    </div>
  ) : (
    login
  );
}
