window.addEventListener('load', evt => {
  const $spanA = document.getElementById('spanA');
  console.log('DDDDDDDDDDDDD', $spanA);

  const $divs = document.getElementsByTagName('div');
  console.log('🚀  divs:', $divs);

  const $div = $divs[0];
  console.log('🚀  div:', $div);

  const fc = $div.firstChild;
  console.log('🚀  fc:', fc);

  const p = $div.firstElementChild;
  p.firstChild;

  const $spanX = document.getElementById('spanX');
  function f1() {
    console.log('111', $spanX.offsetWidth);
    $spanX.textContent = 'XXXXX';
    const width = $spanX.offsetWidth;
    console.log('222', width, 500 / (width / 5));

    $spanX.textContent = 'X'.repeat(500 / (width / 5));
  }

  function f2() {
    const $tmp = $spanX.cloneNode(true);
    $div.appendChild($tmp);
    console.log('xxx>>', $tmp.offsetWidth);
    // while ($tmp.offsetWidth < 500) {
    $tmp.textContent = 'X';
    // }
    console.log('$tmp.width>>', $tmp.offsetWidth);
    $spanX.parentNode.replaceChild($tmp, $spanX);
  }

  f2();

  console.log('*******', $spanX.offsetWidth);

  // HTMLCollection;
  // NodeList;

  const users = [
    { id: 1, name: '홍길동', tel: '01088889991', addr: '서울' },
    { id: 2, name: '김길동', tel: '01088889992', addr: '부산' },
    { id: 3, name: '이길동', tel: '01088889993', addr: '서울' },
    { id: 4, name: '박길동', tel: '01088889994', addr: '서울' },
  ];
});
