import SlugDetector from '@/app/ui/SlugDetector';
import Link from 'next/link';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// export const dynamicParams = true;
export async function generateStaticParams() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?userId=1'
  );
  const posts = await res.json();
  return posts.map((post: Post) => ({
    slug: [`${post.id}`, 'dfu', 'dfd'],
  }));
}

export default function Slug({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  const isValid = !!slug?.length;
  return (
    <div>
      {isValid ? (
        <div>
          SlugPage: <strong>{slug?.join()}</strong>
          <Link href='/shop'>Slug</Link>
        </div>
      ) : (
        <SlugDetector slug={slug} />
      )}
    </div>
  );
}
