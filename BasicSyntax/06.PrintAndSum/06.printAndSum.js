function printAndSum(start, end) {
  let sum = 0;
  let line = "";

  for (let i = start; i <= end; i++) {
    let number = i;
    line += number + " ";
    sum += number;
  }

  console.log(line);
  console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
