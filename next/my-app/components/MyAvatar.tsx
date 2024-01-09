import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Props = {
  imgUrl: string;
  fallback: 'A' | 'B';
};
export default function MyAvatar({ imgUrl, fallback }: Props) {
  return (
    <Avatar>
      <AvatarImage src={imgUrl} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
