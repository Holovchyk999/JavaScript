'use strict';

const ref = {
    input: document.querySelector("#font-size-control"),
    span: document.querySelector("#text"),
  };
  
  const { input, span } = ref;

  input.addEventListener('input', handleChangeInput)

  function handleChangeInput({ currentTarget }) {
      const value = currentTarget.value
      span.style.fontSize = value + 'px'
  }