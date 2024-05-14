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

console.log("the sqrt of 9 is = ", sqaure_1(3) );
