const more = document.querySelector(".health").addEventListener("click", () => {
  console.log(this);
});

const d = new Date();
let year = d.getFullYear();

document.querySelector(".pcopy").innerHTML = "Copyright@" + year;

// const number = [12, 10, 13, 29];
// var result;
// console.log(number);

// function number(num1, num2) {
//   return (result = num1 + num2);
// }

// console.log(number(12, 20));
// console.log(number);
