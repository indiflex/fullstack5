'use client';

import { useEffect, useState } from 'react';

export default function DateTime() {
  const [dtstr, setDtstr] = useState('');

  const dt = new Date().toString();
  console.log('🚀  dt:', dt);

  useEffect(() => {
    console.log('********************');
  }, []);

  return (
    <div>
      DateTime: {dtstr}
      <hr />
      <button
        onClick={() => {
          setDtstr(dt);
          console.log(new Date());
        }}
        className='btn'
      >
        DT
      </button>
    </div>
  );
}
