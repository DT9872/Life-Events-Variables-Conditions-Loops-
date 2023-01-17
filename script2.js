"use strict";

const hours = prompt("Enter hours worked");
console.log(hours);
const wage = prompt("Enter your wage");
console.log(wage);

if (hours > 40) {
  let pay = 40 * wage + 1.5 * wage * (hours - 40);
  console.log(pay);

  let oneMillion = Math.round(1000000 / `${pay}`);
  console.log(oneMillion);
} else {
  let pay = wage * hours;
  console.log(pay);

  let oneMillion = Math.round(1000000 / `${pay}`);
  console.log(oneMillion);
}
