function magicSum(array, n) {
  for (let index = 0; index < array.length; index++) {
    let sum = 0;

    for (let i = index + 1; i < array.length; i++) {
      sum = array[index] + array[i];
      if (sum === n) {
        console.log(`${array[index]} ${array[i]}`);
      }
    }
  }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
//magicSum([14, 20, 60, 13, 7, 19, 8], 27);
//magicSum([1, 2, 3, 4, 5, 6], 6);
