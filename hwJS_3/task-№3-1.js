const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

  user.mood = "happy"
//   console.log(user)

  user.hobby = "skydiving"
user.premium = false

const entries = Object.entries(user)
//   console.log(keys)

for (const entry of entries) {
    const key = entry[0]
    const value = entry[1]
    console.log(`${key}: ${value}`)
}
