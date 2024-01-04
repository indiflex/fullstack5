'use client';

import { useRouter } from 'next/navigation';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// export const dynamicParams = true;
// export async function generateStaticParams() {
//   const res = await fetch(
//     'https://jsonplaceholder.typicode.com/posts?userId=1'
//   );
//   const posts = await res.json();
//   return posts.map((post: Post) => ({
//     slug: [`${post.id}`, 'dfu', 'dfd'],
//   }));
// }

export default function Slug({ params }: { params: { slug: string[] } }) {
  const router = useRouter();

  const { slug } = params;
  console.log('🚀  slug:', slug);
  if (!slug?.length) {
    console.log('***************');
    router.push('/shop/000');
    return;
  }
  return (
    <div>
      SlugPage: <strong>{slug.join()}</strong>
    </div>
  );
}
