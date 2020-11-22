"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createLiElement = (ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  return li;
};

const ingredientsLiItems = ingredients.map(createLiElement);

const ingredientsElement = document.querySelector("#ingredients");

ingredientsElement.append(...ingredientsLiItems);

console.log(ingredientsLiItems);
