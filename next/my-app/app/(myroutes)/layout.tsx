export default function MyroutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='m-5 border p-3'>
      <h1 className='font-bold'>This is MyRoutes Layout</h1>
      <div className='border-2 border-blue-500 border-solidx border-dotted p-2'>
        {children}
      </div>
    </div>
  );
}
