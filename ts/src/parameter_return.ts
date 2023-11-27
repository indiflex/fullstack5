function registUser(name: string, age: number) {
  const id = 100;
  return { id, name, age };
}

type X = typeof registUser;
type RegistUser = Parameters<typeof registUser>;

const param: RegistUser = ['Hong', 32];
const newUser = registUser(...param);
console.log('🚀  newUser:', newUser);
