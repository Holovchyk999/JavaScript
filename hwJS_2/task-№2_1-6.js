const logItems = function(array) {

  for (let i = 0; i < array.length; i++) {

    console.log(`${i + 1} - ${array[i]}`);
  }
};


logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const calculateEngravingPrice = function(message, pricePerWord) {
  const array = message.split(" ");
  const totalPrice = array.length * Number(pricePerWord);
  console.log(message);

  return totalPrice;
};
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




const findLongestWord = function(string) {
  let stringSplit = string.split(" ");
  let total = 0;
  let longestWord;

  for (let i = 0; i < stringSplit.length; i += 1) {
    total = stringSplit[1].length;

    if (stringSplit[i].length > total) {
      longestWord = stringSplit[i];

      return longestWord;
    }
  }
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


"use strict";

const formatString = function(string) {
  if (string.length <= 40) {
    return string;
  } else {
    let longsSrtings = string.slice(0, 41);
    console.log(longsSrtings + "...");
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




const checkForSpam = function(message) {
  message = message.toLowerCase();
  if (message) {
    message = message.includes("sale") || message.includes("spam");
    return message;
  }
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("введите число!!!");
  if (input === null) {
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    break;
  }
  input = Number(input)
  numbers.push(input);
}
console.log(`Общая сумма чисел равна ${total}`);



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
