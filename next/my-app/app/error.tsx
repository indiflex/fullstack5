'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {}, [error]);

  return (
    <div>
      <h2>Something went wrong! {error.name || error.digest}</h2>
      <pre style={{ color: 'red' }}>{error.stack || error.message}</pre>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
