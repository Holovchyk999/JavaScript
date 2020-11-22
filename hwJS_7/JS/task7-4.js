"use strict";

const resultEl = document.querySelector("#value");
const decrementBtEl = document.querySelector('button[data-action="decrement"]');
const incrementBtEl = document.querySelector('button[data-action="increment"]');

decrementBtEl.addEventListener("click", decrement);
incrementBtEl.addEventListener("click", increment);

function decrement() {
  const currentValue = Number(resultEl.textContent);
  resultEl.textContent = currentValue - 1;
}

function increment() {
  const currentValue = Number(resultEl.textContent);
  resultEl.textContent = currentValue + 1;
}
