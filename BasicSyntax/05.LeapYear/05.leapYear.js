function isLeapYear(n) {
  if ((n % 4 === 0 && n % 100 !== 0) || n % 400 === 0) {
    console.log(`yes`);
  } else {
    console.log(`no`);
  }
}

isLeapYear(1984);
isLeapYear(2003);
isLeapYear(4);
