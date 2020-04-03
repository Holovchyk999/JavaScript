const countProps = function(obj) {
  const numberValues = Object.values(obj);
//   console.log(numberValues)

  const longArray = numberValues.length;
  return longArray;
};

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
