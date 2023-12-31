function mergeArrays(arrOne, arrTwo) {
  let third = [];

  for (let index = 0; index < arrOne.length; index++) {
    let elementOne = arrOne[index];
    let elementTwo = arrTwo[index];

    let sum = "";
    if (index % 2 === 0) {
      sum = Number(elementOne) + Number(elementTwo);
      third.push(sum);
    } else {
      sum += elementOne + elementTwo;
      third.push(sum);
    }
  }

  console.log(third.join(" - "));
}

mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
