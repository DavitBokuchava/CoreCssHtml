// "use strict"

/**
 * @object
 *  Object is an entity with state and behavior
 *  key - value store of data
 * - @delete removes property or method of object
 * - get property by dot @object.property
 * - other way to get property object['property']
 * - if there is not property it returns undefined
 * - object is @immutable
 * - @this
 *  Property tuning
 *   - Object.defineProperty
 *      Object.defineProperty(object, 'property', { value: 'value' }
 *      it defines new or existent property add/update
 *   - Object.defineProperties
 *       add/update new properties, first arg is obj,
 *       the second is object of properties
 *       like {property:{value:value, ...descriptors}}
 *      descriptors are optional!!!!
 * the both of them added/updated
 * properties deskriptors by default are:
 * @writable : false,
 * @configurable : false,
 * @enumerable : false
 *
 * @getter / @setter -  @Accessor descriptors
 * @set fn(val){}  obj.fn = val
 * @get fn(){}      obj.fn -- provides data without  using ()
 *
 *   - Object.getOwnPropertyDescriptor
 * @descriptors
 *  - {
 *      value
 *      }
 * @property in object returns @boolean type result
 * @Object Tuning
 * - Object.preventExtensions == cant add/delete only update
 * - Object.freeze == to stop shallow CRUD manipulations in object
 * - Object.seal ==  only update values
 * - Object.isExtensible == return extensiable or not, boolean
 * - @Object.isFrozen == to add/update/delete object boolean result
 * - @Object.isSealed == true/false
 * 
 * 
 * @prototype
 * @prototype is an object and it is accesable in constructors
 * @Object.create(object) it creates object
 *  which prototype would be object in braces
 * Object.setPrototypeOf(obj, prototype)
 *
 * 
 * 
 * @Object @assign
 * The Object.assign() method copies all @enumerable
 * own properties from one or more
 * source objects to a target object.
 * It returns the modified target object.
 * @Object @assign static method dosn't add prototype
 * it dosn't get setter/getters 
 * 

 */

// let test = {
//     name: 123,
//     meth: function () {
//         console.log(this)
//     }
// }

// const refered = test;
// refered.name = 789 // test.name should changed
// function fn() { }
// fn.meth = () => { console.log(this) }
// fn.meth()
// test.meth()
// console.log(test["name"], test.name, refered.name)

/**
 * @this in object
 */

// let task = {
//     isDone: true,
//     esHours: 16,
//     updateEstHours: function (value) {
//         this.esHours = value;
//         let fn = function () {
//             console.log(this)
//         }
//         fn.call(this)
//     }
// }

/**
 * @descroptors
 */

// Object.defineProperties(task, {
//     newProperty: { value: 'newProperty' },
//     newProperty1: { value: 'newProperty1' }
// })
// // console.log(task)
// Object.defineProperty(task, 'isDone', {
//     value: true,
//     // writable: true,
//     // configurable: true
// })
// Object.defineProperty(task, 'newProperty2', {
//     value: 'newProperty2',
//     // writable: true,
//     // configurable: true
// })


// // task.updateEstHours(30) //
// // console.log(task.esHours)

// let descriptor = Object.getOwnPropertyDescriptor(task, 'isDone')

// // console.log(task.isDone, task.newProperty1)

// task.done = null
// task.newProperty1 = "avoe"


// let task2 = {
//     _init: 12,
//     test: 2
// }
// /**
//  * @getter / @setter
//  *  - methods get and set data
//  */
// Object.defineProperties(task2, {
//     newProperty: {
//         value: 'newProperty',
//         writable: true,
//         configurable: true,
//         enumerable: true
//     },
//     getInit1: {
//         get: function () {
//             return this._init
//         },
//         // set: function (newValue) {
//         //     this._init = newValue
//         // },
//         configurable: true,
//         enumerable: true
//     }
// })

// Object.defineProperty(task2, 'getInit', {
//     get() {
//         return this._init
//     },
//     set: function (newValue) {
//         delete this.getInit
//         console.log(this.hasOwnProperty('getInit'))
//         this._init = newValue
//     },
//     // writable: true,
//     enumerable: true,
//     configurable: true
// })
// // delete task2.getInit1
// for (let prop in task2) {
//     console.log("###### props:", prop,)
// }
// console.log()
// const descr = Object.getOwnPropertyDescriptor(task2, 'getInit')
// task2.getInit = 200;

// console.log(task2, task2.getInit1, descr)

// // console.log(task2.getInit())


// console.log(task2.hasOwnProperty('newProperty'))

// delete task.done
// delete task.newProperty1

// console.log(task.done, task.newProperty1)

/**
 * @Object tunning
 * - Object.isExtensible
 * - Object.preventExtensions
 * - Object.freeze
 * - Object.seal
 * - @Object.isFrozen
 * - @Object.isSealed
 */

// let task = {
//     id: 1,
// }

// console.log(Object.isExtensible(task));

// task.name = 'name'
// console.log(task)

// // Object.preventExtensions(task);
// console.log(Object.isExtensible(task), Object.isFrozen(task));
// task.id = 2
// task.newProp = "prop"
// console.log(task, Object.isFrozen(task))
// Object.freeze(task);

// task.nested = { id: 15 }
// task.nested.newProp1 = 100000;
// // delete task.nested.id
// Object.defineProperty(task.nested, 'newProp2', { value: 55555555 })
// console.log(task, Object.isFrozen(task))


// Object.freeze(task);
// // delete task.id
// // task.newProp = 20 // false
// // task.id = 33333
// // const descr =

// console.log(task)
// let x = 5, y = 7
// let task = {
//     x,
//     y,
//     [x]:'sss'
// }

// console.log(task[x])

/**
 *
 * @Object to create object
 *
 */

// let task = new Object({ id: 5 })

// task.isPrototypeOf('id')

// task.fn = function () {
//     console.log('proto')
// }

// console.log(task, task.isPrototypeOf('id'))


/**
 * @prototype
 * @prototype is an object and it is accesable in constructors
 * @Object.create(object) it creates object
 *  which prototype would be object in braces
 * Object.setPrototypeOf(obj, prototype)
 *
 */

// let task = {
//     a: 10,
//     b: 20
// }
// // let anotherTask = Object.create(task, { avoe:})
// function Task() {

// }
// let task1 = {
//     prop1: 'prop1',
//     fn1: function () { console.log('task1', this) }
// }
// let task2 = {
//     prop2: 'prop2',
//     fn2: function () { console.log('task2', this) }
// }


/*
 * Object.setPrototypeOf(obj, prototype)
 */

// Object.setPrototypeOf(task2, task1);
// Object.setPrototypeOf(task2, task);

// task2.fn1()
// console.log(task2.prop1)
// let arr = [];
// let anotherTask = Object.create(task)
// anotherTask = { one: 'jjjj' }
// task.prototype = function gg(){console.log('proto')}
// console.log(
//     Array.prototype.isPrototypeOf(arr),
// task.getPrototypeOf(gg),
//     arr instanceof Array,
//     task.isPrototypeOf(anotherTask))

// console.log(anotherTask, Task.prototype, task.__proto__, anotherTask.__proto__)


/**
 * @Object @assign
 * The Object.assign() method copies all @enumerable
 * own properties from one or more
 * source objects to a target object.
 * It returns the modified target object.
 * @Object @assign static method dosn't add prototype
 * it dosn't get setter/getters 
 */

// let task1 = {
//     id: 1
// }

// let task2 = {
//     id: 2,
//     priority: 1000
// }

// let task3 = {
//     prop: "propTask3"
// }

// let target = {}

// Object.defineProperty(task3, "newProp", {
//     value: "newProp",
//     enumerable: true
// });

// // console.log(task3)
// Object.setPrototypeOf(task2, task3)
// //  Object.setPrototypeOf(object, prototype)

// // console.log(Object.getPrototypeOf(task2) === task3, Object.getPrototypeOf(task2))

// Object.assign(target, task1, task2, task3);

// // @assign static method dosn't add prototype


// console.log(target, Object.getPrototypeOf(target)) // {id: 2, priority: 1000, prop: 'propTask3'}


/**
 * @assign and descriptor
 */
// let task = {
//     _init: 'avoe',
//     set priority(val) { this._init = val },
//     get priority() {
//         // console.log(this.init)
//         return this._init
//     }
// }

// const target1 = {};

// // task.priority = "30";
// // console.log(task.priority, Object.getOwnPropertyDescriptor(task, 'priority'))

// Object.assign(target1, task)

// // console.log(Object.getOwnPropertyDescriptor(target1, 'priority'))
// // console.log(Object.getOwnPropertyDescriptors(task), task)
// // target1.priority = 2
// // console.log(Object.getOwnPropertyDescriptors(target1))

// let target2 = {}

// Object.defineProperties(target2, Object.getOwnPropertyDescriptors(task, "priority"))

// target2.priority = 1000000000000

// console.log(target2)

// // console.log(Object.getOwnPropertyDescriptors(target2))


class Wall{
    constructor(width, height){
        this.width= width;
        this.height = height;
    }
  }

  class Wallss{
    constructor(width, height){
        this.width= width;
        this.height = height;
    }
  }

  class Room{
    constructor(width, height, Obj){
        this.wall = new Obj(width,height);
    }
    print(){
        console.log(this.wall);
    }
  }
  var room = new Room(1,1,Wall);
  room.print()

  var room1 = new Room(1,1,Wallss);
  room1.print()
  
  console.log(Wall.prototype,room.__proto__,room1.__proto__)
  

