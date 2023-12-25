function multiplicationTable(n) {
  let result = 0;
  for (let i = 1; i <= 10; i++) {
    result = `${n} X ${i} = ${n * i}`;
    console.log(`${result}`);
  }
}

multiplicationTable(5);
//multiplicationTable(2);
