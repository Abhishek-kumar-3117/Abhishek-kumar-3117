const user1 = { name: "Abhishek" };
const user2 = { age: 21 };

const profile = { ...user1, ...user2 };

console.log(profile);