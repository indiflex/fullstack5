const x = 1000;
const y = 2000;
const z = 3000;
f`Amt: ${x}원 ${y}개 ${z}`;

function f(txts, ...vals) {
  console.log("🚀  f:", txts, vals);
  const [lbl, unit] = txts;
  console.log(
    lbl,
    vals.toLocaleString().padStart(9, " "),
    unit.padStart(1, " ")
  );
}
