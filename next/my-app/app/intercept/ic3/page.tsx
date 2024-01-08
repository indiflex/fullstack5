import Link from 'next/link';

export default function Ic3() {
  return (
    <div>
      <h1>IC3 Page</h1>
      <div className='flex justify-around gap-5 my-3'>
        <Link href='/intercept/ic2' className='btn'>
          IC2
        </Link>
        <Link href='/about' className='btn'>
          About
        </Link>
      </div>
    </div>
  );
}
