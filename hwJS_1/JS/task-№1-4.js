const credit = 23580;
const pricePerDroid = 3000;
let totalPrice
let price
let input;

input = prompt("Сколько дроидов вы хотите купить?");

totalPrice = input * pricePerDroid
price = credit - totalPrice
if(input === null) {
console.log('Отменено пользователем!')
} else if (totalPrice >= credit) {
    console.log('Недостаточно средств на счету!')
} else {
    console.log(`Вы купили ${input} дроидов, на счету осталось ${price}`)
}

