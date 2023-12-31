function addOrSubtract(numbers) {
  let originalSum = 0;
  let newSum = 0;
  let newArray = [];

  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    originalSum += element;
    if (element % 2 === 0) {
      element += i;
      newSum += element;
      newArray.push(element);
    } else {
      element -= i;
      newSum += element;
      newArray.push(element);
    }
  }

  console.log(newArray);
  console.log(originalSum);
  console.log(newSum);
}

addOrSubtract([5, 15, 23, 56, 35]);
addOrSubtract([-5, 11, 3, 0, 2]);
