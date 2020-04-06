// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//   };

//   user.mood = "happy"

//   user.hobby = "skydiving"
// user.premium = false

// const entries = Object.entries(user)

// for (const entry of entries) {
//     const key = entry[0]
//     const value = entry[1]
//     console.log(`${key}: ${value}`)
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const countProps = function (obj) {
//     const numberValues = Object.values(obj);

//     const longArray = numberValues.length;
//     return longArray;
//   };

//   console.log(countProps({}));

//   console.log(countProps({ name: "Mango", age: 2 }));

//   console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const findBestEmployee = function (employees) {
//     let maxTask = 0;
//     let worker;

//     const keyObj = Object.keys(employees);

//     for (const key of keyObj) {
//       if (maxTask < employees[key]) {
//         maxTask = employees[key];
//         worker = key;
//       }
//     }

//     return worker;
//   };
//   console.log(
//     findBestEmployee({
//       ann: 29,
//       david: 35,
//       helen: 1,
//       lorence: 99,
//     })
//   );

//   console.log(
//     findBestEmployee({
//       poly: 12,
//       mango: 17,
//       ajax: 4,
//     })
//   );

//   console.log(
//     findBestEmployee({
//       lux: 147,
//       david: 21,
//       kiwi: 19,
//       chelsy: 38,
//     })
//   );

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const countTotalSalary = function (employees) {
//     let total = 0;

//     const money = Object.values(employees);

//     for (const value of money) {
//       total += value;
//     }
//     return total;
//   };

//   console.log(countTotalSalary({}));

//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80,
//     })
//   );

//   console.log(
//     countTotalSalary({
//       kiwi: 200,
//       lux: 50,
//       chelsy: 150,
//     })
//   );

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const products = [
//     { name: "Радар", price: 1300, quantity: 4 },
//     { name: "Сканер", price: 2700, quantity: 3 },
//     { name: "Дроид", price: 400, quantity: 7 },
//     { name: "Захват", price: 1200, quantity: 2 },
//   ];

//   const getAllPropValues = function (arr, prop) {
//     const copyProducts = [];

//     for (const product of arr) {
//       if (prop in product) {
//         copyProducts.push(product[prop]);
//       }
//     }
//     return copyProducts;
//   };

//   console.log(getAllPropValues(products, "name"));

//   console.log(getAllPropValues(products, "quantity"));

//   console.log(getAllPropValues(products, "category"));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const products = [
//     { name: "Радар", price: 1300, quantity: 4 },
//     { name: "Сканер", price: 2700, quantity: 3 },
//     { name: "Дроид", price: 400, quantity: 7 },
//     { name: "Захват", price: 1200, quantity: 2 },
//   ];

//   const calculateTotalPrice = function (allProdcuts, productName) {
//     for (let obj of allProdcuts) {
//       if (obj.name === productName) {
//         let total = obj.price * obj.quantity;
//         return total;
//       }
//     }
//   };

//   console.log(calculateTotalPrice(products, "Радар"));
//   console.log(calculateTotalPrice(products, "Дроид"));
