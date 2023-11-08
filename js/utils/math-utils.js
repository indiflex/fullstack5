export const rand = (s, e) => {
  const ret = s + Math.floor((e - s + 1) * Math.random());
  console.log('rand>>', ret);
  return ret;
};
