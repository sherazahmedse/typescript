// Exploring Type Annotations 

let apples : number = 5; 
let speed : string = `fast`;
let hasName : boolean = true;
let nothingMuch : null = null;
let nothing : undefined = undefined; 

// built-in objects 

let now : Date = new Date();

// arrays 

let colors: string[] = ['red','green', 'blue'] 
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true,true,false];

// classes 
class Car {

}

let car: Car = new Car();

// Object literal

let point: {
  x: number; 
  y: number
} = {
  x: 10,
  y: 20
} 

//  functions

const logFucntion: (i: number) => void = (i: number) => {
  console.log(i);
} 


// hover over all variables and above and see type annotations  



// Exporing type inference 
// type inference can only work when declaration and assignment of the variable are done at the same time  

let applesTI  = 5; 
let speedTI  = `fast`;
let hasNameTI  = true;
let nothingMuchTI  = null;
let nothingTI = undefined; 

// try assigning something else 
// applesTI  = "5"; // should throw an error beacause of type inference  

// built-in objects 

let nowTI  = new Date();

// arrays 

let colorsTI  = ['red','green', 'blue'] 
let myNumbersTI  = [1,2,3];
let truthsTI: boolean[] = [true,true,false];

// classes 
class CarTI {
}

let carTI  = new Car();

// Object literal

let pointTI = {
  x: 10,
  y: 20
} 

//  functions

const logFucntionTI = (i: number) => {
  console.log(i);
} 

// hover over all variables and above and see type inference   

// experiment with declartion only
let comeVar; // hover and see the type is any 
comeVar = 2; // hover and see the type is still any 

/// WHEN TO USE annotations 
// Prefer to use type annotations when 
// Case 1 :
//  functions that returns any type 
const json = `{
  "x": 10,
  "y": 20
}`;

const coordinates = JSON.parse(json); // hover over it and see the function JSON.parse() returns any
console.log(coordinates);
console.log(coordinates.asdasdasdsa); // ts does not throws an error 
 
const longitude : { x: number; y: number;} = JSON.parse(json); // hover over it and see the function JSON.parse() returns any
console.log(longitude);
// console.log(longitude.asdasdasd); // TS throws an error this time 


// // but see this 
const newJson = `{
  "x": 10,
  "y": 20,
  "z": 12
}`;

const latitude : { x: number; y: number;} = JSON.parse(newJson); // hover over it and see the function JSON.parse() returns any
console.log(latitude.x); 
console.log(latitude.y); 
// console.log(latitude.z); // throws an error! fine because not defined in type but 

console.log(latitude); // this will print  



// CASE 2 
// When we declare variable on one line and initialze it later
// just a silly quick example 
let words = ['red', 'green', 'blue'];
let foundword : boolean;  // hover over it , any type 

for (let i = 0; i < words.length; i++) 
{
  if(words[i] === 'green')
    foundword = true;
} 

// CASE 3 
// WHEN we want a variable to have a type that cant be infered 
// example 


// assign false when not found and assign number when found. BAD CODING PRACTICE (just for a sake of an example )
// Bad code. bad code !!
let numbers = [-10, -1, 20];
let numberAboveZero : boolean | number = false; 

for (let i = 0; i < numbers.length ; i++)
{
  if(numbers[i] > 0 )
    numberAboveZero = numbers[i];
} 






