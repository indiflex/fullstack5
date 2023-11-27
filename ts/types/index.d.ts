export type User = {
  id: number;
  name: string;
};

declare global {
  type Dept = { id: number; dname: string };
}
