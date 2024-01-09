export const cap = (s: string) =>
  [s[0].toUpperCase(), s.slice(1, s.length)].join('');

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export const getPhotos = async (albumId: number = 1): Promise<Photo[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
    {}
  );

  return res.json();
};
