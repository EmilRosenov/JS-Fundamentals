function arrayRotation(array, n) {
  //let newArr = [];

  for (let i = 0; i < n; i++) {
    let element = array.shift();
    array.push(element);
  }

  console.log(array.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);
