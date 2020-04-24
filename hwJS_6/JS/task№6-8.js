"use strict";

import users from "./users.js";

const getUsersWithFriend = (users, friendName) =>
   users
    .filter((filterFriendName) => filterFriendName.friends.includes(friendName))
    .map((filterFriendName) => filterFriendName.name);

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
