type User = { id: number; name: string };
type Dept = { id: number; dname: string };

const sales: Dept = { id: 100, dname: 'Sales' };

const obj = { id: 1, name: 'Hong', addr: 'Seoul' };
let hong: User = obj;
// hong = { id: 3, name: 'Choi', addr: 'Seoul' }; // error

let kim: User | Dept;
kim = { id: 2, name: 'Kim', dname: 'Pusan' };

function getUserName(user: User) {
  return user.name;
}
function getDeptName(dept: Dept) {
  return dept.dname;
}

const r = getUserName(obj);
console.log('🚀  r:', r);
// getUserName(kim); // error (covariant)
getUserName({ id: 2, name: 'Kim' });
getDeptName({ id: 2, dname: 'ss' });

function getName(f: (o: User | Dept) => string, x: User | Dept) {
  console.log('name is', f(x));
}

// getName(getUserName, kim);

type Emp = { id: number; name: string; dept: Dept; addr: string };

type TEmp = Omit<Emp, 'dept' | 'addr'>;
type TEmp2 = Omit<User & Emp, ''>;
interface IEmp extends Omit<Emp, 'dept' | 'addr'> {}
interface IEmp2 extends Omit<User | Emp, ''> {}

type PEmp1 = Pick<Emp, 'id' | 'name'>;
interface PEmp2 extends Pick<Emp, 'id' | 'name'> {}

let emp1: TEmp = { id: 1, name: 'Hong' };
let emp2: IEmp = { id: 1, name: 'Hong' };
let emp3: IEmp2 = { id: 1, name: 'Hong' };
// let emp33: IEmp2 = { id: 1, name: 'Hong', addr: 'Seoul', dept: sales };
let emp4: TEmp2 = { id: 1, name: 'Hong', addr: 'Seoul', dept: sales };

// import { jadeX } from 'jade';
// console.log('xx=', jadeX);

import { styles } from './src/styles.module.css';
console.log(styles.xxx);
