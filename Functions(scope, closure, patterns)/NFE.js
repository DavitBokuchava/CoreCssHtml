// "use strict"
/**
 * @Named Function Expression (NFE)
 * it is usefull for recursion
 */
// "use strict"
// let squareFunc = function square1(a,b){
//     square1 = null
//     console.log(square1)
// }
// // TypeError: Assignment to constant variable  if it is in  stricted mode
// // squareFunc(100,100)
// // squar1(200,200) //  ReferenceError: squar1 is not defined
// squareFunc(200,200)
// console.log()

/////

// function f(n) {
//     return n ? n * f(n - 1) : 1 // f referenced to null in 24
// }

// let ff = function factorial(n){
//     return n ? n * factorial(n - 1) : 1
// }

// let g = f;
// let gg = ff;
// // f = null; //TypeError: f is not a function
// // ff = null // it is correct
// console.log(g(2),gg(5))
