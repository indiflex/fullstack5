import { useEffect, useState } from 'react';

const cacheUrlData: Record<string, unknown> = {};

const fetchByCache = async (url: string, init: RequestInit) => {
  // console.log('fetchByCache>>>>>', url, cacheUrlData);
  if (url in cacheUrlData) return cacheUrlData[url];

  const res = await fetch(url, init);
  const data = await res.json();
  cacheUrlData[url] = data;
  return data;
};

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetchByCache(url, { signal })
      .then((data) => setData(data))
      .catch(console.error);

    return () => controller.abort();
  }, []);

  return data;
};
