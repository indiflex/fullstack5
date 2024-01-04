import { cap } from '@/app/_lib/utils';

export default function HiTime({ params }: { params: { time: string } }) {
  return <div>Good {cap(params.time)}!</div>;
}
