function subtractionEvenOdd(arr) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) % 2 === 0) {
      evenSum += Number(arr[i]);
    } else {
      oddSum += Number(arr[i]);
    }
  }

  console.log(evenSum - oddSum);
}

subtractionEvenOdd([1, 2, 3, 4, 5, 6]);
subtractionEvenOdd([3, 5, 7, 9]);
subtractionEvenOdd([2, 4, 6, 8, 10]);
subtractionEvenOdd(["3", "5", "7", "9"]);
subtractionEvenOdd(["2", "4", "6", "8", "10"]);
