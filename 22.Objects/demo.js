// let obj = {
//   //   123: 123,
//   x: 5,
//   y: "Zdrasti",
//   z: true,
//   v: undefined,
//   b: [1, 2, 3, 4],
//   a: null,
//   q: { name: "Pesho", age: 123 },
//   speak: function (message) {
//     console.log(message);
//   },
// };

// // let property = "a";
// // console.log(obj.x);
// // console.log(obj[property]);
// obj.speak("Zdrasti priqtlio!");
// obj["speak"]("Hi!");

// console.log(obj[123]);
// console.log(obj["123"]);

// let person = {
//   name: "Ivan",
//   age: 23,
//   introduce: function () {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} y/o old!`);
//   },
// };

// person.introduce();

// const dog = {};

// // ["name"] = .name
// // dog["name"] = "Roshko";
// dog.name = "Roshko";

// dog.age = 3;
// dog.bark = function () {
//   console.log("bark bark bark");
// };
// console.log(dog.name);

// dog.name = "Pesho";

// console.log(dog.name);

// const person = {
//   name: "Pesho",
//   age: 12,
//   address: "Sofia, Bulgaria",
//   greet() {
//     console.log("Zdrasti!");
//   },
// };

// for (const key of Object.keys(person)) {
//   console.log(`key: ${key}`);
// }

// console.log("-------");

// for (const value of Object.values(person)) {
//   console.log(`value: ${value}`);
// }

// VALUE TYPES
// let a = 5;
// let b = a;
// a = 11;

// console.log(b);

// // REFERENCE TYPES -> Objects, Array, Funcitons
// let obj1 = {
//   name: "Pesho",
//   age: 123,
//   addres: ["a", "b", "c"],
// };

// console.log(JSON.stringify(obj1));
// console.log(JSON.parse(`{"name":"Pesho","age":123,"addres":["a","b","c"]}`));

// JSON
/**
const personJSON = {
    "name": "Pesho",
    "age": 21,
    "address": "Sofia, Bulgaria"
}
 */

// XML
/**
<personXML>
    <name>Pesho</name>
    <age>21</age>
    <address>Sofia, Bulgaria</address>
</personXML>
 */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log("Hi!");
  }
}

const person = new Person("Person1", 11111);
person.speak();

// const ivanPerson = new Person("Ivan", 18);
// console.log(ivanPerson);
// const silviaPerson = new Person("Silvia", 21);
// console.log(silviaPerson);

// class CookieCutter {
//   constructor(flavor) {
//     this.flavor = flavor;
//   }
// }

// const chocoCookie = new CookieCutter("Chocolate");
// console.log(chocoCookie);

// const pineappleCookie = new CookieCutter("Pineapple");
// console.log(pineappleCookie);
