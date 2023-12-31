function maxNum(array) {
  let topIntegers = [];
  let isBigger = false;
  let element = 0;

  for (let i = 0; i <= array.length; i++) {
    if (isBigger) {
      topIntegers.push(element);
    }
    element = array[i];

    for (let index = i + 1; index <= array.length; index++) {
      if (element <= array[index]) {
        isBigger = false;
        break;
      } else {
        isBigger = true;
      }
    }
  }

  console.log(topIntegers.join(" "));
}

maxNum([1, 4, 3, 2]);
maxNum([14, 24, 3, 19, 15, 17]);
maxNum([41, 41, 34, 20]);
maxNum([27, 19, 42, 2, 13, 45, 48]);
