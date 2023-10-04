const MENU = {
  짜장: { price: 7000 },
  짬뽕: { price: 9900 },
  탕슉: { price: 25000, taxfree: 1 },
};

const LABEL_SIZE = 6;
const PRICE_SIZE = 7;

function bill(tableNo) {
  const ordered = {};
  const tot = { price: 0, tax: 0 };

  return {
    _orderOrCancel(item, flag = 1) {
      if (flag < 0 && !ordered[item])
        return console.log('Not ordered yet!!', item);

      const { price, taxfree } = MENU[item];
      if (ordered[item]) ordered[item] += flag;
      else ordered[item] = flag;

      tot.price += price * flag;
      tot.tax += (taxfree ? 0 : calcTax(price)) * flag;
    },
    order(item) {
      this._orderOrCancel(item);
    },

    cancel(item) {
      this._orderOrCancel(item, -1);
    },

    printBill() {
      console.log(`\n\nTable. ${tableNo}`);
      printLine();
      for (const item in ordered) {
        const cnt = ordered[item];
        if (!cnt) continue;
        const { price, taxfree } = MENU[item];
        console.log('*', item, `(${cnt})`);
        f`공급가액: ${price * cnt}원`;
        f`부가세액: ${(taxfree ? 0 : calcTax(price)) * cnt}원`;
        printLine('-');
      }
      f`주문합계: ${tot.price}원`;
      f`주문합계: ${tot.tax}원`;
      printLine();
    },
  };
}

const table1 = bill(1);
table1.order('짜장');
table1.order('짬뽕');
table1.order('짜장');
table1.printBill();

const table2 = bill(2);
table2.order('짜장');
table2.printBill();

table1.order('탕슉');
table1.cancel('탕슉');
table1.cancel('짜장');
table1.cancel('탕슉');
table1.printBill();

function f([label, unit], price) {
  console.log(`${label.padEnd(LABEL_SIZE, ' ')} ${priceFmt(price)}`);
}

function priceFmt(price, unit = '원') {
  return price.toLocaleString().padStart(PRICE_SIZE, ' ') + unit;
}

function printLine(flag = '=') {
  console.log(flag.repeat(LABEL_SIZE * 2 + PRICE_SIZE + 1));
}

function calcTax(price) {
  return Math.round((price / 1.1) * 0.1);
}
