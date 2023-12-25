function rounding(number, precision) {
  //   number.parseFloat(number);

  if (precision > 15) {
    precision = 15;
  }

  let result = 0;
  number = number.toFixed(precision);
  return (result = parseFloat(number));
}

console.log(rounding(3.14154444565575845865854332, 3));
console.log(rounding(10.5, 3));
