function sumEven(arr) {
  let evenSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) % 2 === 0) {
      evenSum += Number(arr[i]);
    }
  }

  console.log(evenSum);
}

sumEven(["1", "2", "3", "4", "5", "6"]);
sumEven(["3", "5", "7", "9"]);
sumEven(["2", "4", "6", "8", "10"]);
