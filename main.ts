// Example 1 Of Simple Function

// Function declaration
// function calculateSquare(num: number): number {
//     return num * num ;
// }
// // Function call
// const number = 7;
// const square = calculateSquare(number);
// console.log(square);

// Example 2 Of Simple Function

// Function declaration
// function calculateCube(num: number): number {
//     return num * num * num;
// }
// // Function call
// const number = 5;
// const cube = calculateCube(number);
// console.log(cube);

// Example 1 Of Arrow Function

// const calculateSquare = (num:number):number => num * num ;

// const number = 5;
// const square = calculateSquare(number);
// console.log(square);

// Example 2 Of Arrow Function

// const calculateCube = (num:number):number => num * num * num ;

// const number = 8;
// const cube = calculateCube(number);
// console.log(cube);

// Example 1 Of Anonymous Function

// const square = function (num: number) : number {
//     return num * num
// };
// const number = 5;
// const squaredNumber = square(number);
// console.log(squaredNumber);

// Example 2 Of Anonymous Function

// const cube = function (num: number) : number {
//     return num * num * num
// };
// const number = 6;
// const cubedNumber = cube(number);
// console.log(cubedNumber);

// Example of Global Scope

// let globalVar = 20;
// // Global Scope Function
// function globalFunction():void {
//     console.log("Inside globalFunction , globalVar is : " + globalVar);
// }
// // Function call
// globalFunction();
// console.log("Outside globalFunction , globalVar is : " + globalVar);

// Example of Local Scope Variable

let globalVar = 10;
let localVar = 20

function globalFunction():void {
    // Local Scope Variable
    
    console.log("Inside globalFunction , localVar is : " + localVar);
};
// Function call
globalFunction();
console.log("Outside globalFunction , localVar is : " + localVar);