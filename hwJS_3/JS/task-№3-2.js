const countProps = function (obj) {
  const numberValues = Object.values(obj);

  const longArray = numberValues.length;
  return longArray;
};

console.log(countProps({}));

console.log(countProps({ name: "Mango", age: 2 }));

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
