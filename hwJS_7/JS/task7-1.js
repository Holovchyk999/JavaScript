"use strict";

const categoriesRef = document.querySelectorAll(".item");

console.dir(`в списке ${categoriesRef.length} категории`);

const ArrayRef = [...categoriesRef]
  .map(
    (categories) => `Категория: ${categories.children[0].textContent}
  Количество елементов: ${categories.children[1].children.length}`
  )

  .join("\n");

console.log(ArrayRef);
