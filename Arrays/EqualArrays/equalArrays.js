function equalArrays(arrOne, arrTwo) {
  let sum = 0;
  for (let i = 0; i < arrOne.length; i += 1) {
    if (arrOne[i] !== arrTwo[i]) {
      return console.log(
        `Arrays are not identical. Found difference at ${i} index`
      );
    }
  }
  if (arrTwo.length > arrOne.length) {
    for (let i = 0; i < arrTwo.length; i += 1) {
      if (arrTwo[i] !== arrOne[i]) {
        return console.log(
          `Arrays are not identical. Found difference at ${i} index`
        );
      }
    }
  } else {
    for (let i = 0; i < arrOne.length; i += 1) {
      sum += Number(arrOne[i]);
    }
  }
  console.log(`Arrays are identical. Sum: ${sum}`);
}

equalArrays(["10", "20", "30"], ["10", "20", "30"]);
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
equalArrays(["1"], ["10"]);
