'use client';

import { useEffect, useState } from 'react';

export default function CSR() {
  console.log('CSR!!!!!!!!!!!');
  const dt = new Date().toString();
  const [dtStr, setDtStr] = useState('');
  useEffect(() => {
    setDtStr(dt);
    if (new Date().getTime() % 2) throw new Error('EEEEEEEEE');
  }, [dt]);
  return <h1>This is CSR Page!! {dtStr}</h1>;
}
