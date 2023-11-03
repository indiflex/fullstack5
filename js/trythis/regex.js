const ret = upperToLower('Senior Coding Learning JS');
console.log('🚀  ret:', ret);

export function upperToLower(str) {
  return str.replace(/[A-Z]/g, matchedStr => matchedStr.toLowerCase());
}
