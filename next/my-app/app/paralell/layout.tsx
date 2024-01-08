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
  return (
    <div>
      <div>{children}</div>
      <hr />
      <div>{login}</div>
      <div>{profile}</div>
    </div>
  );
}
