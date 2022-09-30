// "use strict"

/**
 *
 * @class
 *
 * if it returns explicitly
 * other object but not primitive
 * it is imposible get this of object
 *  @prototype @chain
 * 1. @instance object
 *         ==>
 * 2. Constuctor @prototype
 *         ==>
 * 3. @Object @prototype Object.prototype
 *
 *  object has not property prototype,
 *
 *  to get object of prototype
 *  - @object has __proto__, not prototype
 *  - @constructor/function has proototype
 * - @Constructor / @function.prototype.isPrototypeOf(object/instance)
 *
 * instance @object
 *  and constructor of this @object have the same prototype
 *
 */

// let Task = function (action) {
//     this.action = action;
// }

// Task.prototype.fn = function () {
//     console.log(this)
// }
// let str = 'string';
// function tst() { }
// tst.prototype.fn = function () { }
// let task = new Task('create');
// let task1 = new Task('create');


// task.fn = null
// console.log(typeof task, tst.constructor.prototype.__proto__)
// console.log(Task.prototype.isPrototypeOf(task1))
// console.log(Task instanceof Function, "inh")
// console.log(task.__proto__ === Task.prototype)
// console.log(task instanceof Task)
// console.log(Task.prototype.__proto__ === Object.prototype)
// console.log(tst.constructor.prototype.__proto__ === Function.prototype.__proto__)
// console.log( Task.constructor, task.constructor, Task.prototype.constructor)
// console.log(task.constructor,Task.constructor, str.constructor)
// console.log(task.constructor === Task)
// console.log(task.__proto__ === Task.prototype)

/**
 * @class
 * - It is not hoisted
 * - impossibla invoke class without new keyword
 * - impossible to use call/apply/bind with class,only in old class
 */

// class Task {
//     // let x = 'assigned' // syntax error
//     constructor() {
//         console.log("Constructor Task")
//         this.taskId = 2
//     }

//     getTask() {
//         return this
//     }

//     static fn() {
//         console.log(Object.create(this.prototype), this)
//         return Object.create(this.prototype)
//     }
// }


// let task = new Task();
// const method = task.getTask;
// const test = function () { return this }
// console.log(task.getTask()) // task {}
// console.log(method(), test()) // window ?????????

// function TaskFn() {

// }
// let b = Object.setPrototypeOf({ a: "b" }, Task.fn())
// let b = Task.fn({a:'b'})
// console.log(global.TaskFn === TaskFn, globalThis)
// console.log(global.Task)
// console.log(b.constructor)
// console.log(b)


// TaskFn.prototype.fn = function () {
//     console.log(this.id)
// }


// let task = new Task()
// let task1 = new Task()
// task.fn()
// console.log(task.fn === task1.fn)
// console.log(task.__proto__);
// console.log(task)



/**
 * 
 * @extend @class
 * 
 * @super ()
 *  
 * - extended class has constructor should use  @super ()
 * - method @super used only once and always after this 
 * - super.method to get parent method
 * 
 * @static @methods 
 * - in static function this references to class
 * - static methods could be in extended classes
 * 
 */

// class ParentClass {
//     constructor(prop) {
//         console.log('Parent Class')
//         // console.log(new.target)
//         this.parentProperty = prop;
//         // this.test = Object.getPrototypeOf(this)
//     }

//     static staticMethod() {
//         console.log('Static Method Invocation ===', this.staticMethod1())
//     }

//     static staticMethod1() {
//         return this.staticMethod1.name
//     }

//     getTest(){
        
//     }

//     getData() {
//         return 1
//     }

//     getMethod() {
//         console.log("parent method")
//     }
//     parentMethod() {
//         return this
//     }
// }


// // ParentClass.staticMethod()
// let tst = new ParentClass()
// ParentClass.staticProperty = 'static property'
// console.log(tst)

// class ChildClass extends ParentClass {
//     constructor(prop) {
//         super(prop)
//         this.chidlProperty = 'childeProperty'
//         // this.test = Object.getPrototypeOf(this)
//         console.log('Extended parent Class')
//     }

//     // getData() {
//     //     return super.getData() + 1
//     // }

//     // getMethod() {
//     //     console.log("child method")
//     // }

//     // childMethod() {
//     //     return super.parentMethod()
//     // }
// }

// let task = new ChildClass('avoe');

// console.log(task.parentProperty)

// class Child extends ChildClass {
//     constructor() {
//         super()
//         this.test = this
//     }
//     getData() {
//         const p1 = Object.getPrototypeOf(this);
//         console.log(p1)
//         const p2 = Object.getPrototypeOf(p1);
//         console.log(p2)
//         const sum = p1.getData() + p2.getData()
//         // return Object.getPrototypeOf(p2).getData()
//         return sum
//     }

// }


/**
 * 
 * @prototype chain 
 * 
 * 
 */




// function ParentFn() {
//     console.log('Parent Old class');
//     this.parentClassName = 'Parent'
// }

// // function Test(){
// //     console.log('avoe')
// // }

// ParentFn.prototype.test = function () {
//     console.log(this.parentClassName)
// }
// ParentFn.prototype.test1 = function () {
//     console.log(this.parentClassName)
// }
// ParentFn.prototype.test2 = function () {
//     console.log(this.parentClassName)
// }
// function ChildFn() {
//     console.log('Parent extended class', this);
//     ParentFn.call(this)
//     this.childClassName = 'Child'
// }
// ChildFn.prototype.test3 = function(){
//     console.log(this)
// }
// // ChildFn.prototype = Object.create(ParentFn.prototype)
// Object.setPrototypeOf(ChildFn,ParentFn)
// Object.setPrototypeOf(ChildFn.prototype,ParentFn.prototype)
// // ChildFn.prototype = ParentFn.prototype





// let fnTask = new ChildFn()

// fnTask.test2()
// console.log(fnTask)


////////////// ??????????? \\\\\\\
// TaskFn.prototype.fn = Object.defineProperty(TaskFn, 'fn', {
//     get: function () { console.log(this.id) },
//     set: function (id) { this.id = id },
//     // configurable: false
// })

// let taskFn = {}
// Object.setPrototypeOf(taskFn,TaskFn)
// // TaskFn.call(taskFn);

// // taskFn = TaskFn.prototype
// console.log(taskFn instanceof TaskFn)
/////////// ??????????? \\\\\\\\\\\\\



