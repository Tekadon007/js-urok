// console.log("hello JS!");
/*console.error("hello JS!")
console.warn("hello JS!")*/

//! Переменные - именнованная хранилище данных
// let, var, const
//console.log(birth)
// const birth = "01.25.2005";
//console.log(birth)
// birth = "01.25.2006"

// console.log(lastName)
// let lastName = "Parlova";
// console.loc(lastName);
// lastName = "Piroco"
// console.log(lastName)

// console.log(firstName)
// var firstName = "Anna"
// console.log(firstName)
// firstName = "Elenna"
// console.log(firstName)

//! Название переменных
// Нельзя ставить цифру в начало
// let 5block =""
// зарезурвурвированные слова нельзя использовать
// let let

//! Нельзя
// let fist name
// let first-name
// const Red = "ssfd"

//! можно
// let camelCase
// let color_orange
// let _colororange
// const RED = "#qww1313"
// const $block = ""
// const number10 = 10

//! типы данных
// 1 string
// let str = "strochka";
// console.log(str);
// const typeOfStr = typeof str;
// console.log(typeOfStr);
// console.log(typeof str);

// let str1 = "qwe";
// let str2 = "asd";
// let str = `zxc`;

// 2 numer

// let num1 = 100;
// const PI = 3.14;
// console.log(typeof num1)

// 3 boolean
// const bool1 = true;
// const bool2 = false;

// 4 null- специальная пустата
// let error = null;

// 5 undefined
// let hello;
// console.log(hello);

// 6 object (object, array)
// let user = {
//   name: "Diana Kim",
//   age: 20,
// };

// console.log(user.name);
// console.log(user.age);

// console.log(user["name"])

//array
// let arr = [false, 100, true, {}, [], "hello"];
// console.log(arr.length)
//console.log(arr);
// console.log(arr[0]);
// console.log(arr[5]);

// 7 symbol
// let id = Symbol("r567u");

// 8 bigInt
// let int = 341212121n;

//! Math operators
// console.log(1 + 5);
// console.log(5 - 2);
// console.log(10 / 2);
// console.log(10 * 10);

// console.log(2 ** 3);
// console.log(10 % 7);
// ! -, /, *
// console.log("10" / "2");

//!NaN -> Not A Numer
// console.log("hello" / 2);

//! +
//! concat -> слияние
// console.log("10" + "2");
// console.log(10 + "2");
// console.log("10" + 2);

//! true-false значение
// console.log(Boolean(0)); //False
// console.log(Boolean(-1));  //true
// console.log(Boolean(null));  //False
// console.log(Boolean(undefined));  //False
// console.log(Boolean("Hello"));  //true
// console.log(Boolean(""));  //False

//! сравнение
//! строгое ===  (тип данных и значение должны быть равны)
// console.log(3 === 5); // false
// console.log(3 === 3); // true
// console.log(3 === "3"); // false
// console.log(3 !== 5); // true

//! не строгое ==
// console.log(3 == 3); //true
// console.log("3" == 3); // true
// console.log("3" != 3); //false

//! >, <, =
// console.log(3 < 5); // true
// console.log(5 < 3); // false
// console.log(4 >= 4); // true
// console.log(4 <= 4); // true

//! из string в numer
//! +
// let elem = "100000";
// console.log(elem);
// console.log(+elem);

//! parseInt
// let elem2 = "100000fdfafsdf"
// console.log(parseInt(elem2));

//! ParseFloat
// let elem3 = "100.2000sfsesd";
// console.log(parseFloat (elem3));

//! Numer
// let elem4 = "10000";
// console.log(Number(elem4));

//! из number в string
// let num = 8990;
// console.log(num);
// console.log(typeof num.toString());
// console.log(String(num));

//! aler, prompt, confirm
// alert("Ты гей")
// let firstName = prompt("Иди нахуй?");
// console.log(firstName);
// инторполяция - встроенное выражение
// alert(`${firstName}, иди нахуй!` )
// let value = confirm("Ты далбаеп?")
// console.log(value);

let num1 = prompt ("введите мне в жопу")
let operator = prompt ("введите меня в подвал")
let num2 = prompt ("введите второе число")
let result = eval(num1 + operator + num2) // "2+2"
alert(result)