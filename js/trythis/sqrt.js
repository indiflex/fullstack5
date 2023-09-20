function sqrt(s = 1, e = 9, len = 3) {
  for (let i = s; i <= e; i += 1) {
    const sq = Math.sqrt(i);
    if (sq % 1 === 0) continue;
    console.log(i, '=>', sq.toFixed(len));
    // not need round
    // console.log(
    //   i,
    //   '=>',
    //   Math.floor(sq * 1000) / 1000,
    //   Math.trunc(sq * 1000, 3) / 1000
    // );
  }
}

sqrt();
sqrt(11, 20);
