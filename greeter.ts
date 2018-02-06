// function greeter(person: string) {
//     return "Hello, " + person;
// }
// var user = "Jane User";
// document.body.innerHTML = greeter(user);


// interface Person {
//     firstName: string;
//     lastName: string;
// }
// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
// var user = { firstName: "Jane", lastName: "User" };
// document.body.innerHTML = greeter(user);


// class Student {
//     fullName: string;
//     constructor(public firstName, public middleInitial, public lastName) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }
// interface Person {
//     firstName: string;
//     lastName: string;
// }
// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
// var user = new Student("Jane", "M.", "User");
// document.body.innerHTML = greeter(user);

// let a: string = '1';
// let c: number = 1;
// let b: string = `this is ${a} and
//                 ${c + 1}`;

// let a: number[] = [1, 2, 3];
// let a: Array<number | string> = [1, '2', 3];

// let a: [number, string];
// a = [1, '2'];
// a[3] = '3';

// enum Color { Red = 5, Green, Pink }
// let a: Color = Color.Red;
// let b: string = Color[7];
// console.log(a);
// console.log(b);

// let a: any = 1;
// a = true;

// let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;

// function f(input: boolean) {
//     let a = 100;

//     if (input) {
//         // Still okay to reference 'a'
//         let b = a + 1;
//         return b;
//     }

//     // Error: 'b' doesn't exist here
//     return b;
// }
// console.log(f());


// let o = {
//     a: "foo",
//     b: 12,
//     c: "bar"
// };
// let { a: first, b: second }: { a: string, b: number } = o;
// console.log(first);

// function keepWholeObject(wholeObject: { a: string, b?: number }) {
//     let { a, b = 1001 } = wholeObject;
// }
// keepWholeObject({ a: '1' });

// let first = [1, 2];
// let second = [3, 4];
// let bothPlus = [0, ...first, ...second, 5];

// let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
// let search = { food: "rich", ...defaults };
// console.log(search);

// class C {
//     p = 12;
//     m() {
//     }
// }
// let c = new C();
// let clone = { ...c };
// clone.p; // ok
// clone.m(); // error!

// function printLabel(labelledObj: { label: string }) {
//     console.log(labelledObj.label);
// }
// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

// interface LabelledValue {
//     label?: string;
// }
// function printLabel(labelledObj: LabelledValue): { label: string } {
//     console.log(labelledObj.label);
//     return { label: '1' };
// }
// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

// interface Poin {
//     readonly a: number;
//     readonly b: string;
// }
// let p1: Poin = { a: 5, b: 'poin' };
// p1.a = 5;

// interface SquareConfig {
//     color?: string;
//     width?: number;
//     [propName: string]: any
// }
// function createSquare(config: SquareConfig): { color: string; area: number } {
//     return { color: '1', area: 1 }
// }
// let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig);
// let mySquare = createSquare({ colour: "red", width: 100 });

// interface SearchFunc {
//     (source: string, subString: string): boolean;
// }
// let mySearch: SearchFunc;
// mySearch = function (source, subString) {
//     let result = source.search(subString);
//     return result > -1;
// }
// mySearch('111', '1');

// interface StringArray {
//     [index: number]: string;
// }

// let myArray: StringArray;
// myArray = ["Bob", "Fred"];

// let myStr: string = myArray[0];

class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);









