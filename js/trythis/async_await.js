const f = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  console.log("OK>>", res.ok);
  if (!res.ok) throw new Error("Failt to Fetch!!");

  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await res.json();

  return data;
};

console.log(await f());
