function login(arr) {
  let user = arr.shift();
  let passWord = [...user].reverse().join("").toString();

  let counter = 1;
  arr.forEach((input) => {
    if (input === passWord) {
      return console.log(`User ${user} logged in.`);
    }

    if (counter === 4) {
      console.log(`User ${user} blocked!`);
    } else if (input !== passWord) {
      console.log(`Incorrect password. Try again.`);
    }
    counter++;
  });
}

login(["Acer", "login", "go", "let me in", "recA"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
