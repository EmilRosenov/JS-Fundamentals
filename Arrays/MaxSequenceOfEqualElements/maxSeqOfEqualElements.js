function maxSequence(array) {
  let counter = 1;
  let longest = 0;
  let end = 0;
  let bestEnd = 0;
  let start = 0;

  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if (element === array[index + 1]) {
      counter++;
      end = index + 1;
    } else {
      counter = 1;
    }

    if (longest < counter) {
      start = index;
      longest = counter;
      bestEnd = end;
    }
  }

  let resultArray = [];

  for (let index = start - 1; index <= bestEnd; index++) {
    let element = array[index];
    resultArray.push(element);
  }

  return console.log(resultArray.join(" "));
}

maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequence([4, 4, 4, 4]);
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
