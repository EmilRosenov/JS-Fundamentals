function reverse(n, arr) {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }
  let reversed = [];
  for (let index = newArr.length - 1; index >= 0; index--) {
    reversed.push(newArr[index]);
  }
  console.log(reversed.join(" ").toString());

  //   let newArr = [];

  //   newArr = arr.splice(0, n);
  //   let result = newArr.reverse().join(" ").toString();
  //   console.log(result);
}

reverse(3, [10, 20, 30, 40, 50]);
