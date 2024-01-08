import Link from 'next/link';

export default function Intercept() {
  return (
    <div>
      <h1>Intercept Page</h1>
      <div className='flex justify-around gap-5 my-3'>
        <Link href='/intercept/ic1' className='btn'>
          IC1
        </Link>
        <Link href='/intercept/ic2' className='btn'>
          IC2
        </Link>
        <Link href='/intercept/ic3' className='btn'>
          IC3
        </Link>
      </div>
    </div>
  );
}
