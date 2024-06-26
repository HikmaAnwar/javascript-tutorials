// create a function named greet()
function greet() {
    console.log("Hello World!");
}

// store a function in the displayPI variable
// this is a function expression
let displayPI = function() {
    console.log("PI = 3.14");
}

// call the greet() function
greet();

// call the reply() function
displayPI();

// Output:
// Hello World!
// PI = 3.14

// function with a parameter called 'name'
function greeet(name){
    //  console.log('hello' ${name});
    console.log(`Hello ${name}`);
     console.log('hello ${name}');
}

// pass argument to the function
greeet("hikma");
// Output: Hello hikma

// passing different argument(value) to parameter(placeholder)
function greet1(name) {
    console.log(`Hello ${name}`);
}

// pass "bopti" as argument
greet1("bopti");

// pass "donny" as argument
greet1("donny");
// output 
// hello bopti
// hello donny

// function with two arguments
function addNumbers(num1, num2) {
    let sum = num1 + num2;
   console.log(`Sum: ` + sum);
}

// call function by passing two arguments
addNumbers(5, 4);

// Output:
// Sum: 9

// function for finding a sqaure of number
function findSquare(num_1){

    return num_1 * num_1;

}

let sqaure = findSquare(3);
console.log("sqaure = " + sqaure);

// Math.sqrt() computes the square root
let sqaureRoot = Math.sqrt(16);
console.log("The sqaure root of 16 is = ", sqaureRoot);



// Math.pow() computes the power
let power = Math.pow(2, 3);
console.log("2 to the power of 3 is =", power);

// toUpperCase() converts text to uppercase
let band = "Iron Maiden";
let bandUpper = band.toUpperCase();
console.log(`Favorite Band: ${bandUpper}`);

// function expression

let sqaure_1 = function find1Sqaure(numm){

    return numm * numm;
};

console.log( sqaure_1(3) );



// Arrow function
function add_1(a,b){
    return a + b;
}
// is the same as arrow fuction below
 let add = (a, b) => a + b



//  another function with a single argument so the barces can be removed
let isPositive = Number => Number >= 0
// let isPositive = (Number) => Number >= 0



//continues 
function randomNumber(){
    return Math.random
}
let randomNumber = () => Math.random



// function example
document.addEventListener('click', function(){

    console.log('click')
})
// another arrow function
document.addEventListener('click', () => console.log('click'))


// last example for arrow function
class person {
    constructor(namee){
        this.namee = namee
    }

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow:' + this.namee)
        }, 100)
    }

    printNameFuction(){
        setTimeout(function() {
            console.log('function:' + this.namee)}, 100)
    }
}

let person = new person('bopti')
person.printNameArrow()
person.printNameFuction()
console.log(this.namee)

// output:
// Arrow: bopti
// function:

// built in strings
let stringOne = "Arrow functions do not have their own arguments object.";
let stringTwo = "However, it's important to note that arrow functions also have limitations";

console.log(stringOne.charAt(2))
console.log(stringOne.charCodeAt(2))

console.log(stringOne.endsWith('object'))
// output: true

console.log(stringTwo.includes('also'))

