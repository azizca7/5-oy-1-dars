// ================ Destructuring Assignment ================

// 1-misol:

// Quyidagi obyektni name, age, va location maydonlariga ajratib oling va ularni konsolga chiqaring.

// let user = {
//     name: "Azizbek",
//     age: 16,
//     location: "Kokand"
// }

// const {name, age, location} = user;

// console.log(name, age, location)

// 2-misol:

// Massivdan destructuring yordamida birinchi va ikkinchi elementlarni ajratib oling va qolgan barcha elementlarni others nomli yangi massivga joylashtiring.

// let users = [10, 20, 30, 40, 50]

// const [ten, twenty, ...others] = users;

// console.log(ten);
// console.log(twenty);
// console.log(others);

// 3-misol:

// Funksiya parametrlari sifatida obyekt berilgan. Funksiya ichida destructuring orqali title va price maydonlarini oling va konsolga chiqaring.

// const product = { title: "Telefon", price: 300, brand: "Samsung" };

// function displayProduct({ title, price }) {
//     console.log("Title:", title);
//     console.log("Price:", price);
// }

// displayProduct(product);

// 2. ================ Scope ================

// 1-misol:

// Quyidagi kodda x qiymatini global, local va block scope’da o‘zgartirib, ularning o‘zgarishlarini kuzating.

// let x = 10;

// function testScope() {
//   let x = 20;
//   if (true) {
//     let x = 30;
//     console.log("Block scope:", x);
//   }
//   console.log("Local scope:", x);
// }

// testScope()
// console.log("Global scope", x);

// 2-misol:

// Quyidagi kodda qaysi scope`da xatolik yuz berishini aniqlang va tuzating.

// let result = 15

// function calculate() {
//     if (true) {
//       let result = 10;
//       console.log(result);
//     }
//     console.log(result);
// }

// calculate();

// 3-misol:

// Global scope’dagi o‘zgaruvchini funksiyada va blok ichida o‘zgartirish qanday natija berishini kuzating.

// let count = 5;

// function increment() {
//   count++;
//   console.log("Function scope:", count);
// }

// increment();
// if (true) {
//   count += 2;
//   console.log("Block scope:", count);
// }

// console.log("Global scope:", count);

// 3. ================ Spread/Rest Operator ================

// 1-misol:

// Quyidagi ikkita massivni spread operator yordamida bitta massivga birlashtiring.\\

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5, 6];

// console.log(arr2);

// qo'shimcha

// const name = ["Abduhoshim"];
// const age = [18];
// const country = [...name, ...age, "Uzebkistan"]

// console.log(country);

// 2-misol:

// Funksiyaga istalgan miqdordagi argumentlarni yuboring va rest operator yordamida ularni bir massiv sifatida qabul qiling. Har bir elementni kvadratga ko‘paytirib qaytaring.

// function squareNumbers(...numbers) {
//     return numbers.map(value => value ** 2)
// }

// squareNumbers();
// console.log(squareNumbers(1, 2, 3, 4, 5));
// console.log(squareNumbers(6, 7, 8, 9, 10));

// 3-misol:

// Quyidagi obyektga yangi maydonlar qo‘shish uchun spread operatoridan foydalaning.

// const user = { name: "Ali", age: 25 };
// const updatedUser = {
//     ...user, country: "Uzbekistan"
// };

// console.log(updatedUser);

// qo'shimcha-1

// const car = { brand: "BMW", model: "X5", color: "Red" };

// const value = {
//     ...car, color: "white"
// }

// console.log(value);

// qo'shimcha-2

// const user1 = { name: "Abduhoshim", age: 18 };
// const user2 = { theme: "dark", language: "Uzb" };

// const users = {
//     ...user1, ...user2
// }

// console.log(users);

// ================ rest ================

// function sumNumbers(...numbers) {
//     let sum = 0;
//     numbers.forEach(value => sum += value)
//     return sum
// }

// console.log(sumNumbers(1, 2, 3, 4));
// console.log(sumNumbers(5, 10, 15));

// Hoisting va TDZ (Temporal Dead Zone)

// 1-misol:

// Quyidagi kodni hoisting qoidasiga asoslanib tahlil qiling va qaysi qatorda xatolik yuz berishini tushuntiring.

// console.log(a);
// var a = 10;

// console.log(b);
// let b = 20;
// // const va let da o'zgaruvchidan oldin uni elon qilib bo'lmaydi var da esa elon qilsa bo'ladi lekin undefined qiymat qaytaradi

// test();
// function test() {
//   console.log("Test function called");
// }

// 2-misol:

// TDZ haqida tushuncha hosil qilish uchun quyidagi kodni to‘ldiring va xatoni tushuntiring.

// console.log(x);
// var x = 10 // undefined qiymat qaytaradi
// let x = 5;
// tepada aytib o'tganimdek let da bersak hato qiymat qaytaradi varda esa hato chiqmaydi

// 5. ================ Modul ================

// 1-misol:

// Ikkita fayl yarating. Birinchi faylda sum va multiply funksiyalarini yozing va ularni eksport qiling. Ikkinchi faylda ushbu funksiyalarni import qiling va ulardan foydalaning.

// 1

// import { sum } from "./function.js";
// console.log(sum(10, 10));

// 2

// import { multiply } from "./function.js";
// console.log(multiply(100, 2));

// 2-misol:

// Default eksportdan foydalaning. Bir faylda greet funksiyasini default qilib eksport qiling va boshqa faylda uni import qilib ishlating.

// import  greet from "./function.js";
// console.log(greet("abduhoshim"));

// 3-misol:

// Modullarda nom o‘zgarishini sinab ko‘ring. Quyidagi funksiyani eksport qiling va import qiling, lekin boshqa nom bilan foydalaning.

// import { divide as division } from "./function.js";
// console.log(division(17, 17));

// 4-misol:

// Funksiya massiv ichidagi isActive: true qiymatiga ega foydalanuvchilarni qaytarishi kerak.

// import { online } from "./js/function.js";
// const users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Laylo", age: 30, isActive: false },
//   { id: 3, name: "Sardor", age: 22, isActive: true },
//   { id: 4, name: "Madina", age: 28, isActive: false },
// ];
// console.log(online(users));

// 2-misol:

// Funksiya foydalanuvchilarni age qiymatiga qarab o‘sish tartibida saralashi kerak.

// import { users } from "./function.js";
// const user = [
//     { id: 1, name: "Ali", age: 25, isActive: true },
//     { id: 2, name: "Laylo", age: 30, isActive: false },
//     { id: 3, name: "Sardor", age: 22, isActive: true },
//     { id: 4, name: "Madina", age: 28, isActive: false },
// ];
// console.log(users(user));

// 3-misol:

// import { averageAge } from "./function.js";

// const people = [
//   { name: "Ali", age: 25 },
//   { name: "Laylo", age: 30 },
//   { name: "Sardor", age: 22 },
//   { name: "Madina", age: 28 },
// ];

// console.log(averageAge(people));

// 4-misol:

// Funksiya minimal va maksimal yoshni qabul qilib, shu yosh oralig‘idagi foydalanuvchilarni qaytarishi kerak.

// import { filterUsers } from "./function.js";

// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Laylo", age: 30 },
//     { name: "Sardor", age: 22 },
//     { name: "Madina", age: 28 },
// ];

// const filteredUsers = filterUsers(people, 23, 30);
// console.log(filteredUsers);

// 5-misol:

// Funksiya massivdagi eng qimmat mahsulotni qaytarishi kerak

// import { binder } from "./function.js";

// const products = [
//     { id: 1, name: "Phone", price: 500 },
//     { id: 2, name: "Laptop", price: 1500 },
//     { id: 3, name: "Watch", price: 300 },
// ];

// const mostExpensive = binder(products);
// console.log("Eng qimmat mahsulot:", mostExpensive);

// 6-misol:

// Funksiya barcha mahsulotlarning narxlari yig‘indisini qaytarishi kerak.

// import { binder } from "./function.js";

// const products = [
//     { id: 1, name: "Phone", price: 500 },
//     { id: 2, name: "Laptop", price: 1500 },
//     { id: 3, name: "Watch", price: 300 },
// ];

// const total = binder(products);
// console.log("Umumiy narx yig'indisi:", total);
