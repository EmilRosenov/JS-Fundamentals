function printDay(n) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (n >= 1 && n <= 7) {
    if (n === 1) {
      console.log("Monday");
    } else if (n === 2) {
      console.log("Tuesday");
    } else if (n === 3) {
      console.log("Wednesday");
    } else if (n === 4) {
      console.log("Thursday");
    } else if (n === 5) {
      console.log("Friday");
    } else if (n === 6) {
      console.log("Saturday");
    } else if (n === 7) {
      console.log("Sunday");
    }
  } else {
    console.log("Invalid day!");
  }
}

printDay(9);
printDay(3);
printDay(6);
printDay(7);
printDay(11);
printDay(1);
printDay(0);
