"use strict";

const fullName = "Jane Doe";
const age = 25;
const birthday = "January 8";
const pineapplePizza = true;
const lifeEvents = [
  "I was born in Michigan",
  "I have a BA in Psychology",
  "I am a mom",
  "I love learning new languages",
];

if (
  fullName === "Jane Doe" &&
  age === 25 &&
  birthday === "January 8" &&
  pineapplePizza
) {
  console.log(
    `My name is ${fullName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${fullName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
  // Returns a random integer from 1 to 10:
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber !== 5) {
    counter++;
    console.log("randomNumber !== 5");
  } else {
    counter++;
    console.log(
      "5 === 5. It took counter iterations to randomly generate the number 5."
    );
    break;
  }
}
