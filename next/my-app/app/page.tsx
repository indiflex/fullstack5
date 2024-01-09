// import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main
      className={cn(
        'flex min-h-screen flex-col items-center justify-between p-24'
      )}
    >
      <Button variant='outline' size='md'>
        Button
      </Button>
      <Link href='/about'>ABOUT</Link>
    </main>
  );
}
