// "use strict"

/**
 * @Function Declaration Statement (FDS)
 *
 * FDS is hoisted
 * context in strict mode is undefined
 *
 * in strict mode global context is window/global
 * but not in function body.
 *
 *  @Class invocation without new keyword returns something
 *  like normal function,
 *  and its constructor depending on type of value
 *  @call
 *  @apply
 *  @bind
 *  first argument is object(context)
 *  bind creates new function deferntly to call and apply
 *
 * @parameters
 * to get parameters function has object @arguments
 * function could not change value
 * of global variable with type of primitive
 * argument of primitive gets only copy of primitive value
 * global object is mutable  in function
 *
 * @function as object, it means that we can create props/methods
 * functionName.length === represents
 * quontit of exprecting arguments
 *
 * functionName.name ==== the name of function
 */


// function square(a, b) {
//     return a * b
// }

// let v1 = square;

// square = undefined

// let v2 = v1(2,2) // its result is 4
// // let v2 = square(5,5)
// // FDS.js:18 Uncaught TypeError: square is not a function

// console.log(v2, square, v1)

////  the same functions

// function f1(){
//     console.log('f1-1')
// }
// function f1(){
//     console.log('f1-2')
// }

// f1() // 'f1-2' it will be overrided by the last function

/////  invocation \\\\\\

// function testFn(a, b) {
//     console.log(this) //  it returns global context window/global
//     // undefined if it is in strict mode
//     return a * b
// }

// const v3 = testFn(2, 3);

// console.log(v3);

// function Person(name, lastName) {
//     this.name = 'name';
//     this.name = name;

//     this.lastName = 'lastName';
//     this.lastName = lastName;

//     // console.log(this)
//     return `${this.name} ${this.lastName}`
// }

// function PersonOne() {
//     this.name = 'name';
//     this.lastName = 'lastName';

//     // console.log(this)
//     return `${this.name} ${this.lastName}`
// }

// let person = new Person("Dato","Bokuchava");
// let personOne = new PersonOne;
// // without return it is like normal function,
// // and its constructor depending on type of value

// console.log("$$$ person",person, "$$$$")
// console.log("$$$$ personOne ", personOne,"$$$$")

/// call,apply,bind

// const personObject = {
//     firstName: 'name',
//     lastName: 'lastname'
// }

// function showFullName(year) {
//     console.log(this)
//     // let prs = `FullName: ${this.firstName} ${this.lastName}, Year: ${year}`
//     // console.log(prs)
//     // console.log(this.lastName, this.name)
// }
// showFullName.call(this,...[25]);
// showFullName.bind(personObject)(30);
// showFullName.apply(personObject,[40]); // second arg is an array

//// params \\\\\

// let sum = function (a,b,c,...rest) { // ...rest ust be the last arg
//     let i, x = 0;
//     // for (i = 0; i < arguments.length; i++) {
//     //     x += arguments[i];
//     // }
//     [...rest].forEach(el=>{
//         x +=el
//     })
//     console.log(arguments,a,b,c)
//     return x;
// }

// let obj = {
//     '0': 0,
//     '1': 1,
//     '2': 2,
//     '3': 3

// }

// console.log(sum(...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


///////////////////////////////////////////////
///////////// TEST \\\\\\\\\\\\

// let ff = [1,2,3,4]
// let yy = 0;
//  let gg = [].forEach.call(Object.keys(obj),(element) => {
//     console.log(element,"el")
//     yy += element
//     return yy
// });

// console.log = function (){
//     return sum(1,2,3,4,5,6,7,8,9,10)
// }

////////////////
// var i = 10;
// function increment(x) {
//     i = "avoe"
//     // to change global var/let it should be
//     // just explicitly resigned
//     console.log(x, "in fn")
// }


// console.log(i);
// increment(i);
// console.log(i)
// console.log(i)

/////////////////////

// function reverse(str) {
//     let y = str.split('').reverse().join('');
//     return y
// }

// function reversePersonName(p) {
//     p.name = reverse(p.name);
//     return p
// }

// let p = { name: 'Ann' }

// console.log(reversePersonName(p).name) // nnA
// console.log(p) // {name:'nnA'}

// console.log(null === 0)
// console.log(null === null)

///////////////////////

//  @function as object, it means that we can create props/methods
// let i = 0

// function funObj(){

//     funObj.meth()
//     return funObj.count++
// }
// funObj.meth = () => i++

// funObj.count = 0  // add property
// console.log(i, " %% i %% ")
// console.log(funObj(), i)
// console.log(funObj(), i)
// console.log(funObj.meth(), " excplicitly i %% ", i)

// function rests(...rest) {
//     return rest
// }

// function args(a, b, c) {
//     console.log(a, b, c)
// }

// function argsInitArg(a, b = 1, c) {
//     console.log(a, b, c)
// }
// console.log(rests.length) // 0
// console.log(args.length) // 3
// console.log(argsInitArg.length) // 2
// console.log(argsInitArg.prototype)
// console.log(funObj.prototype)
/////////


// let globalVar = 10;

// function parentFn(){
//     let x = globalVar +=1
//     console.log(x)
//     return ()=>console.log(++x)
// }

// const a1 = parentFn();
// const a2 = parentFn();

///////////// METHODS \\\\\\\\\\
// "use strict"
// let person = {
//     name:'name',
//     age:30,
//     methArr:()=>console.log(this),
//     meth:function(){
//         return this.methArr()}
// }

// function normaFn(){
//     console.log(this)
// }

// let  arrowFn = ()=>{
//     console.log(this)
// }
// person.meth()
// // person.methArr()
// // console.log(this)
// // normaFn()
// // arrowFn()

/////// lexical environment \\\\\\\

////// closure \\\\\\

/**
 * @Closure
 *
 * 1. the function itself, its Lexical environment
 * plus the entire chain of External lexical Exnvironments.
 *
 * 2. Sometimes they say "variable is taken from the closure",
 * this means  - it was taken from
 * the External Lexical Environment.
 *
 * 3. From the other side: "Closure is function and all external
 * variavles that are available to it."
 *
 */
/////////////////////////
/**
 * The this inside a function is determined by its calling context, and by whether the function is an arrow function or not.

With an arrow function, this is always inherited from the outer scope.

If the function being called is a full function and that function is being called as a property as an object (eg obj.foo()), then the calling context, the this inside the foo function, is obj.

If the function being called is a full function but is standalone - that is, not a property of an object - then there is no calling context, and this inside the function will be undefined or the global object.

With
 */


////////////////  context \\\\\\\\\\\\\
//  The this inside a function is determined by its calling context, and by whether the function is an arrow function or not.

//  With an arrow function, this is always inherited from the outer scope.

// const test = {
//     name:"nameOne",
//     testMethod: function (){
//         const that = this
//         return function(){
//             console.log(this)
//         }
//     }
// }
// // console.log(test.testMethod())
// test.testMethod()()()

// var y = 10;
// var capturedClosure = function () {
//     console.log(y)
// }

// function avoe() {
//     y = y * y
// }

// avoe()

// capturedClosure()
// var x = 30, y = 30;
// function getClosure() {
//     var x = 10;
//     return function () {
//         console.log(x);
//         console.log(y);
//     }
// }

// var closure = getClosure();
// var x = 20, y = 20
// closure()

// console.log(getClosure === getClosure)

// ///////////////////////////
// var createCallback = function (z) {
//     var y = 2;
//     return function (x) {
//         console.log(x);
//         console.log(y);
//         console.log(z)
//     }
// }

// var callAClosure = function (closure) {
//     closure(1)
// }

// callAClosure(createCallback(3))
















