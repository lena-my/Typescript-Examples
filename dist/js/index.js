"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 25;
console.log(x);
let y = 12;
let z = 12;
let firstName = "Matheus";
let age = 30;
const isAdmin = true;
console.log(typeof firstName);
firstName = "John";
console.log(firstName);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
let myTuple;
myTuple = [5, "test", ["a", "b"]];
const user = {
    name: "Peter",
    age: 18,
};
console.log(user);
console.log(user.name);
let a = 0;
a = "test";
a = true;
a = [];
let id = "10";
id = 200;
const userId = 10;
const productId = "00011";
const shirId = 123;
var Size;
(function (Size) {
    Size["S"] = "Short";
    Size["M"] = "Medium";
    Size["L"] = "Large";
})(Size || (Size = {}));
const shirt = {
    name: "V Neck T-shirt",
    size: Size.L,
};
console.log(shirt);
let test;
test = "logged in";
test = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 2));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Sandy"));
function logger(msg) {
    console.log(msg);
}
logger("Test!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Hi ${greet} ${name}`);
    }
    else {
        console.log(`Hi ${name}`);
    }
}
greeting("Joseph");
greeting("Peter", "Sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
console.log(multiplyNumbers({ n1: 5, n2: 10 }));
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`The number is ${info}.`);
        return;
    }
    console.log("Not a number.");
}
doSomething(5);
doSomething(true);
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`The user's name is ${this.name}`);
    }
}
const joanna = new User("Joanna", "Admin", true);
console.log(joanna);
joanna.showUserName();
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`The brand of the car is ${this.brand}.`);
    }
}
const fusca = new Car("Volkswagen", 4);
fusca.showBrand();
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person("Sam");
console.log(sam);
