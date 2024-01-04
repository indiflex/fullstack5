import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About page',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='m-5 border p-3'>
      <h1 className='font-bold'>This is About Layout</h1>
      <div className='border-2 border-blue-500 border-solidx border-dotted p-2'>
        {children}
      </div>
    </div>
  );
}
