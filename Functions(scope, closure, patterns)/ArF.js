/**
 * @Arrow Function (ArF)
 * ES2015
 *
 * @Why Arrow Functions
 * @Parentheses and Braces
 * @Event Handlers and Objects Methods
 * @bind,call,apply
 * @Arguments and …rest
 * @Limititations
 *     @Why ?
 * 1. Provide optimized code execution by js-engines
 *  - can not be a constructor, it doesn't have a prototype
 *  - this, arguments, super are taken from parent scope !!!
 *  - call, apply and bind can  not change the context
 *  - it hasn't its own object AKA @arguments,
 *  It gets it from parent function
 *  - use in callback of hendlers in dom
 *  - doesn't use as a method
 *
 *
 */

// let sum = (a, b) => a + b // in one line
// let withoutParams = () => 'without params' // in one line
// let oneParams = a => `${a} one param` // in one line
// let menyLines = (arg1, arg2) => {
//     return arg1 + arg2
// }
// // if we return something in callybrace it is nessesary to use return keyword
// console.log(sum(400, 400), typeof sum === 'function')
// //typeof sum ===  'function' is true
// let funWithBraces = () => {
//     return {
//         id: 1,
//         priority: 100
//     }
// }
// let test = () => ({
//     id: 1,
//     priority: 100
// }) // (to use for use objects)

// let sumOther = a => b => a + b

// console.log(test(), funWithBraces(), sumOther(5)(6))

//// in objects \\\\

// let CoolWidgetOne = {
//     init: () => {
//         this.doSomethingOne("avoe")
//     },
//     doSomethingOne: function (type) {
//         console.log(`Handling ${type} event`)
//     }
// }
// CoolWidgetOne.init()

// let task = {
//     id: 123,
//     done: function () {
//         return () => console.log(this.id);
//     }
// }

// let anotherTask = {
//     id: 9999
// }

// const x = task.done.bind(anotherTask)
// x()()

/**
 * @arguments
 *
 */

// const arrowFn = (a,b,c)=>console.log(arguments)
// const arrowFn = function(a,b,c){console.log(arguments[0])}
// const arrowFn = function (a) {
//     // console.log(arguments)
//     return () => () => () => console.log(arguments, "ff")
//     // print(a)
// }

// arrowFn('avoe')()()()

// function log(msg) {
//     let print = (...rest) => console.log(rest[0]);

//     print(msg)
// }
// log('avoe2')

/**
 * @limitations
 *
 */

// let Task = () => {
//     this.id = 1
// }

// console.log(new Task())