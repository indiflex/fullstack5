import Image from 'next/image';
import Link from 'next/link';
import { getPhotos } from '../_lib/utils';

export default async function Photos() {
  const photos = await getPhotos();
  return (
    <div className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-5'>
      {photos.map((photo) => (
        <Link
          key={photo.id}
          href={`/photos/${photo.id}`}
          className='hover:opacity-70'
          scroll={false}
        >
          <Image
            src={photo.thumbnailUrl}
            alt={photo.title}
            width={150}
            height={150}
          />
        </Link>
      ))}
    </div>
  );
}
