// string, boolean, number
let x: number = 10;
x = 25;
console.log(x);

//inference x annotation
let y = 12; //inference
let z:number = 12 //annotation

//basic types
let firstName: string = "Matheus";
let age: number = 30;
const isAdmin: boolean = true;


// String != string
console.log(typeof firstName);

firstName = "John";
console.log(firstName);

//object
const myNumbers: number[] = [1, 2, 3]

console.log(myNumbers);
console.log(myNumbers.length);

console.log(firstName.toUpperCase())
myNumbers.push(5);

console.log(myNumbers);


//tuples
let myTuple: [number, string, string[]];
myTuple = [5, "test", ["a", "b"]];

//myTuple = ’[true, false, true]

// object literals -> {prop: value}
const user: {name: string, age: number} = {
    name: "Peter",
    age: 18,
}

console.log(user);

console.log(user.name);

//any
let a: any = 0;
a = "test";
a = true;
a = [];

//union type
let id: string | number = "10";
id = 200;

//id = true;
//id = []

//type alias
type myIdType = number | string;

const userId: myIdType = 10;
const productId: myIdType = "00011";
const shirId: myIdType = 123;

//enum
//clothes size: L, M, S

enum Size {
    S = "Short",
    M = "Medium",
    L = "Large",
}

const shirt = { 
    name: "V Neck T-shirt",
    size: Size.L,
};

console.log(shirt);

//literal types
let test: "logged in" | null;
test = "logged in";
test = null;

//functions
function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(12, 2));

function sayHelloTo(name: string): string {
    return `Hello ${name}`;
}

console.log(sayHelloTo("Sandy"));

//void -> no return
function logger(msg: string): void {
    console.log(msg)
}

logger("Test!");

//?:  optional argument
function greeting( name: string, greet?: string) {
    if (greet) {
        console.log(`Hi ${greet} ${name}`);
    } else {
        console.log(`Hi ${name}`);
    }
}

greeting("Joseph");
greeting("Peter", "Sir");


//interfaces
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams){
    return nums.n1 + nums.n2;
}

console.log(sumNumbers({ n1: 1, n2: 2}));

function multiplyNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2;
}

console.log(multiplyNumbers({ n1: 5, n2: 10}));


//narrowing
//type checking
function doSomething(info: number | boolean) {
    if (typeof info === "number") {
        console.log(`The number is ${info}.`)
        return;
    }
    console.log("Not a number.");
}

doSomething(5);
doSomething(true);

//generics
function showArraysItems<T>(arr: T[]){
    arr.forEach((item)=> {
        console.log(`ITEM: ${item}`);
});
}

const a1 = [1, 2, 3];

const a2 = ["a", "b", "c"];

showArraysItems(a1);
showArraysItems(a2);


//classes
class User {
    name 
    role 
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName() {
        console.log(`The user's name is ${this.name}`)
    }


}

const joanna = new User("Joanna", "Admin", true)
console.log(joanna)
joanna.showUserName()


//interfaces in classes
interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle {
    brand;
    wheels;

    constructor(brand: string, wheels: number){
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand(): void {
        console.log(`The brand of the car is ${this.brand}.`);
    }
}

const fusca = new Car("Volkswagen", 4);
fusca.showBrand();


//heritage
class SuperCar extends Car {
    engine

   constructor(brand: string, wheels: number, engine: number){
    super(brand, wheels);
    this.engine = engine;
   } 
}

const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);

a4.showBrand();


//decorators

//constructor decorator
function BaseParameters(){
    return function <T extends {new(...args: any[]): {}}>(constructor: T){
        return class extends constructor {
            id = Math.random();
            createAt = new Date();
        }
    }
}

@BaseParameters()
class Person {
    name 

    constructor(name: string) {
        this.name = name;
    }
 }

 const sam = new Person("Sam");
 console.log(sam);