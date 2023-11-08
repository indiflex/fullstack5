export const deepCopyObject = obj => {
  if (
    obj === null ||
    typeof obj !== 'object' ||
    obj instanceof WeakMap ||
    obj instanceof WeakSet
  )
    return obj;

  const value = obj.valueOf();
  if (obj.constructor.name === 'Symbol') return Object(value);

  if (obj instanceof Map) {
    return new Map(
      [...obj.entries()].map(([k, v]) => [deepCopyObject(k), deepCopyObject(v)])
    );
  } else if (obj instanceof Set) {
    return new Set([...obj].map(a => deepCopyObject(a)));
  } else if (obj instanceof String) {
    return new String(value);
  }
  // console.log('🚀  value:', value);

  const copiedObj = new obj.constructor(typeof value !== 'object' ? value : {});
  console.log('***', Reflect.ownKeys(obj), obj, copiedObj);
  for (const k of Reflect.ownKeys(obj)) {
    // console.log('k=', k, obj[k]);
    copiedObj[k] = deepCopyObject(obj[k]);
  }
  return copiedObj;
};
