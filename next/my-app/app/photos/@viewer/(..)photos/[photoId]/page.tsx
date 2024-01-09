import { getPhotos } from '@/app/_lib/utils';
import Modal from '@/components/Modal';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function PhotoInterceptor({
  params: { photoId },
}: {
  params: { photoId: string };
}) {
  const photos = await getPhotos();
  const photo = photos.find((photo) => photo.id === Number(photoId));
  if (!photo) return notFound;

  return (
    <Modal className='text-primary'>
      <div className='w-full'>
        <Image
          src={photo.url}
          alt={photo.title}
          width={600}
          height={600}
          priority
        />
        <div className='bg-white w-full'>
          <h1 className='text-lg'>{photo.title}</h1>
        </div>
      </div>
    </Modal>
  );
}
