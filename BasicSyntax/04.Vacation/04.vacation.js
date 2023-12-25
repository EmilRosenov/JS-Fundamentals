function calculateTotal(number, type, day) {
  let total = 0;
  let price = 0;
  if (day === "Friday") {
    if (type === "Students") {
      price = 8.45;
      if (number >= 30) {
        total = number * price * 0.85;
      } else {
        total = number * price;
      }
    } else if (type === "Business") {
      price = 10.9;
      if (number >= 100) {
        total = (number - 10) * price;
      } else {
        total = number * price;
      }
    } else if (type === "Regular") {
      price = 15;
      if (number >= 10 && number <= 20) {
        total = number * price * 0.95;
      } else {
        total = number * price;
      }
    }
  } else if (day === "Saturday") {
    if (type === "Students") {
      price = 9.8;
      if (number >= 30) {
        total = number * price * 0.85;
      } else {
        total = number * price;
      }
    } else if (type === "Business") {
      price = 15.6;

      if (number >= 100) {
        total = (number - 10) * price;
      } else {
        total = number * price;
      }
    } else if (type === "Regular") {
      price = 20;
      if (number >= 10 && number <= 20) {
        total = number * price * 0.95;
      } else {
        total = number * price;
      }
    }
  } else if (day === "Sunday") {
    if (type === "Students") {
      price = 10.46;
      if (number >= 30) {
        total = number * price * 0.85;
      } else {
        total = number * price;
      }
    } else if (type === "Business") {
      price = 16;
      if (number >= 100) {
        total = (number - 10) * price;
      } else {
        total = number * price;
      }
    } else if (type === "Regular") {
      price = 22.5;
      if (number >= 10 && number <= 20) {
        total = number * price * 0.95;
      } else {
        total = number * price;
      }
    }
  }
  console.log(`Total price: ${total.toFixed(2)}`);
}

calculateTotal(30, "Students", "Sunday");
calculateTotal(40, "Regular", "Saturday");
