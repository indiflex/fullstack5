import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import DateTime from '../ui/DateTime';

export default function AboutPage() {
  return (
    <div>
      <span className={twMerge('px-3 py-1 bg-red-300 p-5')}>
        This is about page!
      </span>
      <strong className='text-primary bg-warning'>
        {process.env.customKey}
      </strong>
      <hr />
      <Link href='/csr'>CSR</Link>
      <div className='text-xs text-red-400'>
        <DateTime />
      </div>
    </div>
  );
}
