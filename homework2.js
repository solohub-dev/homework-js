//////////////////////////// Practice 2 ///////////////////////////////
// TASK 1

// let x = 1;
// let y = 2;

// let res1 = String(x) + y;
// console.log(res1); // "12"
// console.log(typeof res1); // "string"

// let res2 = Boolean(x) + String(y);
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"

// let res3 = Boolean(x < y);
// console.log(res3); // true
// console.log(typeof res3); // "boolean"


// let res4 = String(x) + y;
// let res5 = Number("res4");
// console.log(res5); 
// console.log(typeof res5);

// TASK 2 

// let input = prompt('Введіть будь-яке число:', 'years');
// let number = Number(input);
// if (!isNaN(number)) {
//     console.log("Парне додатне:", number > 0 && number % 2 >= 0);
//     console.log("Кратне 7:", number % 7 == 0);
//   } else {
//     console.log("Це не число");
//   }

// TASK 3 

// let arr = [];

// arr[0] = 42;
// arr[1] = "Привіт";
// arr[2] = true;
// arr[3] = null;

// console.log("Кількість елементів:", arr.length);

// arr[4] = prompt("Введіть будь-яке значення:");
// console.log("П'ятий елемент:", arr[4]);

// arr.shift(); // Видалення першого елемента
// console.log("Масив після видалення:", arr);
 // else  variant
 // arr.splice(0, 1); // Видалення першого елемента
// alert( arr )

// TASK 4 

// let cities = ["Rome", "Lviv", "Warsaw"];
// let result = cities.join("*");
// console.log(result); // "Rome*Lviv*Warsaw"

// TASK 5 

// let age = prompt("Скільки вам років?");
// let isAdult = Number(age) >= 18;

// if (isNaN(age)) {
//   console.log("Введено некоректне значення");
// } else if (isAdult) {
//   console.log("Ви досягли повнолітнього віку");
// } else {
//   console.log("Ви ще надто молоді");
// }

// TASK 6 

// let a = parseFloat(prompt("Введіть сторону a:"));
// let b = parseFloat(prompt("Введіть сторону b:"));
// let c = parseFloat(prompt("Введіть сторону c:"));

// if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
//   console.log("Incorrect data");
// } else {
//   // Геронова формула
//   let p = (a + b + c) / 2;
//   let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
//   console.log("Площа трикутника:", area.toFixed(3));

//   // Перевірка на прямокутний трикутник по цій формулі c^2 = a^2 + b^2
//     // Для цього спочатку відсортуємо сторони трикутника     

//   let sides = [a, b, c].sort((x, y) => x - y); // від найменшої до найбільшої
//   let isRight = Math.abs(sides[0] ** 2 + sides[1] ** 2 - sides[2] ** 2) < 0.001;

//   console.log("Чи трикутник прямокутний:", isRight);
// }

// TASK 7 

// let hour = new Date().getHours();
// if (hour >= 23 || hour < 5) {
//   console.log("Доброї ночі");
// } else if (hour >= 5 && hour < 11) {
//   console.log("Доброго ранку");
// } else if (hour >= 11 && hour < 17) {
//   console.log("Доброго дня");
// } else {
//   console.log("Доброго вечора");
// }
// variant 2
// let hour2 = new Date().getHours();
// switch (true) {
//   case (hour2 >= 23 || hour2 < 5):
//     console.log("Доброї ночі");
//     break;
//   case (hour2 >= 5 && hour2 < 11):
//     console.log("Доброго ранку");
//     break;
//   case (hour2 >= 11 && hour2 < 17):
//     console.log("Доброго дня");
//     break;
//   default:
//     console.log("Доброго вечора");
// }

//////////////////////////// Practice 3 ///////////////////////////////

// TASK 1

// let arr = [2, 3, 4, 5];

// через for
// let i = 0; починаємо з нульового індекса масиву, тобто з першого елемента 2
// 2 < arr.length - true виконуємо тіло циклу product1 *= arr[i]; і виконати крок i++ 
// та зберігаємо результат в product1 = 2
// тоді і = 3 і знову проходимо по циклу поки i < arr.length = false 
// тоді цикл закінчує свою роботу
// product1 = 2 * 3 = 6
// product1 = 6 * 4 = 24
// product1 = 24 * 5 = 120
// виводимо в консоль product1 = 120
// let product1 = 1;
// for (let i = 0; i < arr.length; i++) {  //Якщо умова i < arr.length; == true → виконати тіло product1 *= arr[i]; і виконати крок i++
//   product1 *= arr[i];
// }
// console.log("For loop product:", product1);

// через while
// let product2 = 1;
// let i = 0;
// while (i < arr.length) {
//   product2 *= arr[i];
//   i++;
// }
// console.log("While loop product:", product2);

// TASK 2
// % повертає залишок а не результат ділення, тому якщо i = 0, 2, 4, 6, 8, 10, 12, 14 то залишок буде 0, 
// тобто 4 / 2 = 2 а залишок 0 вв той час як 5 / 2 = 2 залишок 1,
//  тому строге порівняння === спрацьовує
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) { 
//       console.log(`${i} is even`);
//     } else {
//       console.log(`${i} is odd`);
//     }
//   }
  
// TASK 3

// function randArray(k) {
//     let result = [];
//     for (let i = 0; i < k; i++) {
//       result.push(Math.floor(Math.random() * 500) + 1);
//     }
//     return result;
//   }
  
//   console.log(randArray(5));
// Math.random() генерує число від 0 до 1.
// Math.random() * 500 — дає число від 0 до 500.
// Math.floor(...) — округляє вниз до цілого числа
// Додаємо 1, щоб було від 1 до 500. Повторюємо k разів.

// TASK 4

// function raiseToDegree(a, b) {
//     if (Number.isInteger(a) && Number.isInteger(b)) {
//       return a ** b;
//     } else {
//       return "Only integers allowed";
//     }
//   }
  
//   let a = parseInt(prompt("Enter base (a):"));
//   let b = parseInt(prompt("Enter exponent (b):"));
//   console.log(raiseToDegree(a, b));
  // a ** b означає "a в степені b" (наприклад, 3 ** 4 = 81).
  // prompt(...) — запитує в користувача число.
  // parseInt(...) перетворює рядок у ціле число.

// TASK 5

// function findMin() {
//     let min = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//       if (arguments[i] < min) {
//         min = arguments[i];
//       }
//     }
//     return min;
//   }
  
//   console.log(findMin(12, 14, 4, -6, 0.2)); // => -4
//   цикл перебирає всі значення які ми передали в console.log(findMin(12, 14, 4, -6, 0.2));
//  і знаходить найменше з них та повертає його return min;
  
// TASK 6

// function findUnique(arr) {
//     let set = new Set(arr);
//     return set.size === arr.length;
//   }
  
//   console.log(findUnique([1, 2, 3, 5, 3]));    // false Тут arr.length буде 5, а set.size буде 4, бо один 3 видалився як дубль.
//   console.log(findUnique([1, 2, 3, 5, 11]));   // true

// TASK 7

// function lastElem(arr, count = 1) {
//     if (count === 1) return arr[arr.length - 1]; // повертає останній елемент масиву
//     return arr.slice(-count); // slice(-count) повертає останні count елементів масиву
//   }
  
//   console.log(lastElem([3, 4, 10, -5]));      // -5
//   console.log(lastElem([3, 4, 10, -5], 2));   // [10, -5]
//   console.log(lastElem([3, 4, 10, -5], 8));   // [3, 4, 10, -5]

// TASK 8

// function capitalizeWords(str) {
//     return str
//       .split(" ") //split(" ") — поділяє рядок на масив слів.   
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       //charAt(0).toUpperCase() — велика літера першого символу.
//       // slice(1) — решта слова.
//       .join(" "); //join(" ") — з'єднує назад в рядок.
//   }
  
//   console.log(capitalizeWords("i love java script")); // I Love Java Script
  
//////////////////////////// Practice 4 ///////////////////////////////
// TASK 1
// function calcRectangleArea(width, height) {
//     if (typeof width !== "number" || typeof height !== "number") {
//       throw new EError("Both parameters must be numbers");
//     }
//     return width * height;
//   }
//   // перевіряємо типи параметрів width і height, якщо не number, то викидаємо помилку
//   // інакше повертаємо площу прямокутника width * height
  
//   try {
//     const area = calcRectangleArea(5, 10);
//     console.log("Rectangle area:", area); // 50
//   } catch (error) {
//     console.error(error.name + ": " + error.message);
//   }
  
//   try {
//     const area = calcRectangleArea("a", 10); // неправильний тип
//   } catch (error) {
//     console.error(error.name + ": " + error.message); // Error: Both parameters must be numbers
//   }
  
// TASK 2

// function checkAge() {
//     try {
//       const input = prompt("Enter your age:");
//       if (input === "") { // юзер ввів порожню стрічку
//         throw new Error("The field is empty! Please enter your age");
//       }
//       const age = Number(input);
//       if (isNaN(age)) { //нечислове значення
//         throw new Error("Age must be a number");
//       }
//       if (age < 14) { // вік юзера менше 14 років
//         throw new Etrrror("You are too young");
//       }
//       alert("You are allowed to watch the movie.");
//     } catch (error) { //В блокові catch передбачити виведення назви і опису помилки
//       alert(`${error.name}: ${error.message}`);
//     }
//   }
  
//   checkAge();

// TASK 3

// створюємо функцію/перевірку showMonthName, яка приймає номер місяця (1-12) і повертає його назву
// function showMonthName(month) {
//     const months = [
//       "January", "February", "March", "April", "May", "June",
//       "July", "August", "September", "October", "November", "December"
//     ];
  
//     if (month < 1 || month > 12) {
//       throw new MonthException("Incorrect month number");
//     }
  
//     return months[month - 1];
//   }
  
//   // Користувач вводить номер місяця, таким чином зберігаємо в prompt значення 
//   // і перетворюємо його на число
//   const userInput = prompt("Enter number month:");
//   const monthNumber = Number(userInput); // Перетворюємо на число
  
//   // Створюємо виняток, у разі якщо номер місяця не в діапазоні 1-12
//   // і викидаємо його
//   function MonthException(message) {
//     this.name = "MonthException";
//     this.message = message;
//   }
  
//   // виводимо через консоль функцію showMonthName де передаємо monthNumber,
//   //  який зберегли в prompt
//   try {
//     console.log(showMonthName(monthNumber));
//   } catch (error) {
//     console.error(`${error.name} ${error.message}`);
//   }

// TASK 4

// function showUser(id) {
//     if (id < 0) {
//       throw new Error(`ID must not be negative: ${id}`);
//     //   Важливо: throw зупиняє виконання функції, передає управління у catch.
//     }
//     return { id };
//   }
  
//   function showUsers(ids) {
//     const validUsers = [];//Створюємо порожній масив validUsers, де зберігатимемо тільки валідні ID
//     for (const id of ids) { // const означає, що всередині однієї ітерації змінна id не буде змінена
//         // ids — це масив що ми передали нижче в консолі (наприклад: [7, -12, 44, 22])
//         // for...of перебирає кожен елемент масиву ids
//         // id — змінна, яка на кожній ітерації містить поточне значення з масиву ids
//         // 
//       try {
//         const user = showUser(id);//Якщо showUser(id) виконується успішно 
//         // (тобто id >= 0) → об'єкт { id } додається в масив.
//         validUsers.push(user);
//       } catch (error) {
//         console.error(error.message);
//       }
//     }
//     return validUsers;
//   }
  
//   console.log(showUsers([7, -12, 44, 22]));
  // Error: ID must not be negative: -12
  // [ { id: 7 }, { id: 44 }, { id: 22 } ]

  
  
  




