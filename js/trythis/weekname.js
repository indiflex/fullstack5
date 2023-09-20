function getWeekName(day) {
  return '일월화수목금토'[day];
}
function getWeekNameOld(day) {
  switch (day) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
  }
}
const dt = new Date();
dt.setDate(dt.getDate() + 1);
dt.setDate(dt.getDate() + 1);
console.log('🚀  wname:', `${getWeekName(dt.getDay())}요일`);
