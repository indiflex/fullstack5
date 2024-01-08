import Link from 'next/link';

export default function Profile() {
  return (
    <div>
      <h1>This is Profile</h1>
      <Link href='/paralell/aaa' className='btn'>
        AAA
      </Link>
    </div>
  );
}
