'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SlugDetector({ slug }: { slug: string[] }) {
  const router = useRouter();
  console.log('🚀  slug:', slug);

  useEffect(() => {
    if (!slug?.length) {
      console.log('***************');
      router.push('/shop/111');
    }
  }, [slug, router]);

  return <></>;
}
