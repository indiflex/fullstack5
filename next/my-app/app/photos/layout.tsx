import { ReactNode } from 'react';

export default function PhotosLayout({
  viewer,
  children,
}: {
  viewer: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      {viewer}
      {children}
    </>
  );
}
