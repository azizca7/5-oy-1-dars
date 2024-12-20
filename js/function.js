// export function sum(a, b) {
//   return a + b;
// }

// export function multiply(a, b) {
//   return a * b;
// }

// export default function greet(name) {
//   return `Hello, ${name}!`;
// }

// export function divide(a, b) {
//   return a / b;
// }

// export function online(user) {
//   return user.filter((value) => value.isActive === true);
// }

// export function users(people) {
//   return people.sort((a, b) => a.age - b.age);
// }

// export function averageAge(users) {
//   if (users.length === 0) return 0;
//   const totalAge = users.reduce((sum, user) => sum + user.age, 0);
//   return totalAge / users.length;
// }

// export function filterUsers(users, minAge, maxAge) {
//   return users.filter((user) => user.age >= minAge && user.age <= maxAge);
// }

// export function binder(products) {
//   let mostExpensive = products[0];
//   for (let i = 1; i < products.length; i++) {
//     if (products[i].price > mostExpensive.price) {
//       mostExpensive = products[i];
//     }
//   }
//   return mostExpensive;
// }

// export function binder(products) {
//   return products.reduce((total, product) => total + product.price, 0);
// }
