function printCommonElements(arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    let element = arrOne[i];
    for (let index = 0; index < arrTwo.length; index++) {
      let elementTwo = arrTwo[index];

      if (element === elementTwo) {
        console.log(element);
      }
    }
  }
}

printCommonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
printCommonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
