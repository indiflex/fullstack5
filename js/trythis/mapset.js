const hrTeam = { id: 1, dname: '인사팀' };
const devTeam = { id: 2, dname: '개발팀' };
const depts = [hrTeam, devTeam];
const deptMap = new Map(depts.map(dept => [dept.id, dept]));
// for (const dept of depts) deptMap.set(dept.id, dept);
console.log(deptMap); // Map(2) { 1 => { id: 1, dname: '인사팀' }, 2 => { id: 2, dname: '개발팀' } }  ⇐ deptMap.get(2)
const hong = { id: 1, name: 'Hong', dept: 1 };
const kim = { id: 2, name: 'Kim', dept: 2 };
const emps = [
  hong,
  kim,
  { id: 3, name: 'Park', dept: 2 },
  { id: 4, name: 'Choi', dept: 2 },
];
const empMap = new Map(emps.map(emp => [emp.id, emp]));
console.log('empMap=', empMap); // Map(2) { 1 => {id: 1, name: 'Hong', dept: 1}, 2 => {id: 2, name: 'Kim', dept: 2}, … }

const empDept = new Map(
  emps.map(emp => {
    const { dept } = emp;
    delete emp.dept;
    return [emp, deptMap.get(dept)];
  })
);
console.log(empDept); // Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }

console.log('kim-dept=', empDept.get(kim).dname); // '개발팀'

// 개발팀 직원 목록 출력 ⇒ Kim, Park, Choi
console.log('empMap=', empMap);

const devTeams = [...empDept.entries()]
  .filter(([, dept]) => dept.id === 2)
  .map(([emp]) => emp.name);
console.log('🚀  devTeams:', devTeams);
