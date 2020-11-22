"use strict";

// const inputRef = document.querySelector("#name-input");
// const outputRef = document.querySelector("#name-output");

const ref = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

const { input, span } = ref;

const defaultName = "незнакомец";

input.addEventListener("input", hendleChangeInput);

function hendleChangeInput({ target }) {
  const value = target.value;
  if (value) {
    span.textContent = value;
  } else {
    span.textContent = defaultName;
  }
}
