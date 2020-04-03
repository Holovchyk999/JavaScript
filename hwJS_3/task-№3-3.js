const findBestEmployee = function(employees) {

  let maxTask = 0;
  let worker;

  const keyObj = Object.keys(employees);

  for (const key of keyObj) {
    if (maxTask < employees[key]) {
      maxTask = employees[key];
      worker = key;
    }
  }

  return worker;
};
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux
