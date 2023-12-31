function equalSums(array) {
  let position = 0;

  if (array.length === 1) {
    return console.log(0);
  }

  let leftSum = 0;
  let rightSum = 0;

  for (let index = 0; index < array.length; index++) {
    leftSum = 0;
    rightSum = 0;
    let counter = 0;
    for (let i = 0; i <= index; i++) {
      leftSum += array[i];
      counter = i;
    }
    for (let j = index; j < array.length; j++) {
      rightSum += array[j];
    }

    if (leftSum === rightSum) {
      position = index;
      return console.log(position);
    }
  }

  return console.log("no");
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
