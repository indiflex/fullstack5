type User = { id: number; name: string; age: number };

// ex1) 다음 UserProfile 타입을 type 또는 interface로 정의하시오.
// type UserProfile = Omit<User, 'age'> & { addr: string };
interface UserProfile extends Omit<User, 'age'> {
  addr: string;
}
let iUser: UserProfile = { id: 1, name: 'Hong', addr: 'Seoul' };

// ex2) 다음 객체들을 하나로 합쳐(extend) 보세요.
let users = [{ name: 'Hong' }, { age: 23 }, { id: 1, addr: 'Seoul' }];

// type FullUser = Record<string, string | number>;
// type FullUser = Record<keyof (typeof users)[0], string | number>;
type FullUser = Partial<Record<keyof (typeof users)[0], string | number>>;
const userProfile: FullUser = users.reduce(
  (acc, user) => ({ ...acc, ...user }),
  {}
);
console.log('🚀  userProfile:', userProfile);

// ex3) regist 함수가 다음과 같을 때 파라미터 처리를 해보세요.
function registUserObj({ name, age }: { name: string; age: number }) {
  const id = 100;
  return { id, name, age };
}

type RegistUserObj = Parameters<typeof registUserObj>[0];

const paramObj: RegistUserObj = { name: 'Hong', age: 32 };
const newUser2 = registUserObj(paramObj);
console.log('🚀  newUser2:', newUser2);
