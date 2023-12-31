function reverseArrOfStrings(arr) {
  let rotations = parseInt(arr.length / 2);
  for (let index = 0; index < rotations; index++) {
    let first = arr[index];
    let temp = first;
    let last = arr[arr.length - 1 - index];

    arr[index] = last;
    arr[arr.length - 1 - index] = first;
  }

  console.log(arr.join(" "));
}

reverseArrOfStrings(["a", "b", "c", "d", "e"]);
reverseArrOfStrings(["abc", "def", "hig", "klm", "nop"]);
reverseArrOfStrings(["33", "123", "0", "dd"]);
