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
     console.log('hello'+  name);
}

// pass argument to the function
greeet("hikma");
// Output: Hello hikma

// passing different argument(value) to parameter(placeholder)
function greet(name) {
    console.log(`Hello ${name}`);
}

// pass "bopti" as argument
greet("bopti");

// pass "donny" as argument
greet("donny");
// output 
// hello bopti
// hello donny