/**
 * 
 * @Regexp
 * 
 */

// let regexp = new RegExp("pattern", "mgi");


// let str = "We will,   we will rock you";

// console.log( str.match(/[a-zA-Z]/gi) ); // We,we (an array of 2 substrings that match)

// // let tag = prompt("What tag do you want to find?", "h2");

// // let regexp = new RegExp("pattern","i"); 
// console.log(regexp.test(str))

// // console.log(Number('ll'))
// let map = new Map();

// map.set('1', 'str1');   // a string key
// map.set(1, 'num1');     // a numeric key
// map.set(true, 'bool1'); // a boolean key

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.
// map.keys() – returns an iterable for keys,
// map.values() – returns an iterable for values,
// map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

// console.log(map)

// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // visits, some users come multiple times
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// // set keeps only unique values
// // console.log( set.size ); // 3
// // console.log(set)
// // console.log([].slice.call(set))
// // for (let user of set) {
// //     console.log(user.name); // John (then Pete and Mary)
// // }
// // const callBack = ()=>'result'
// // const fnn = (cb)=>cb;
// // function ff(){
// //     console.log(new.target)
// // }
// // ff()

// // // console.log(fnn(callBack)(), ff.name.target)


// const p1 = new Promise((resolve)=>{
//     console.log('p1')
// resolve(1)
// }) 
// const p2 = new Promise((resolve)=>{
//     console.log('p2')
// resolve(2)
// }) 
// const p3 = new Promise((rs,rj)=>{
//     setTimeout(()=>{
//         console.log('avoe');
//         rs(3)
//     },1000,3)
// })
// const p4 = Promise.resolve(4)
// const p5 = Promise.reject('err')
// // all,allSettled,race
// Promise.race([p5,p1,p2,p4,p3])
// .then((val)=>console.log(val)).catch(console.log)


for(var i = 0; i<5;i++){
    console.log(i,"sasf")
    setTimeout((){
        console.log(i)
    })
}


// console.log(x)



////////////////////////////////////////////////
//    return  Array.from(arguments).reduce((acc,cur) => {
//     // console.log(cur)
//         return  acc +=cur
//     },0);
// var curry_bind = function (fn, that) {
//     var slice = [].slice,
//         args = slice.call(arguments, 2);
//     return function () {
//       return fn.apply(that, args.concat(slice.call(arguments)));
//     };
//   };

//  function tst(a,b){
//     return [].slice.call(arguments)
//  }

// const res = [].slice

// console.log(tst(1,2))


// Promise.all(promises) – waits for all promises to resolve and returns an array of their results. If any of the given promises rejects, it becomes the error of Promise.all, and all other results are ignored.
// Promise.allSettled(promises) (recently added method) – waits for all promises to settle and returns their results as an array of objects with:
// status: "fulfilled" or "rejected"
// value (if fulfilled) or reason (if rejected).
// Promise.race(promises) – waits for the first promise to settle, and its result/error becomes the outcome.
// Promise.any(promises) (recently added method) – waits for the first promise to fulfill, and its result becomes the outcome. If all of the given promises are rejected, AggregateError becomes the error of Promise.any.
// Promise.resolve(value) – makes a resolved promise with the given value.
// Promise.reject(error) – makes a rejected promise with the given error.