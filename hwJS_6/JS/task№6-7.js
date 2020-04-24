"use strict";

import users from "./users.js";

const calculateTotalBalance = (users) => {
  return users

.map((user) => user.balance)
.reduce(function (result, num) {
    return result + num;
  });
};

console.log(calculateTotalBalance(users)); // 20916
