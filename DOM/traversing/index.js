// x.count = 0

// function x(a,b){
//     return a*b
// }

// const xx = x.bind(null,2)

// const y = x.bind(null,1)
// console.log(xx(1)(2))

function getClosure(){
    let x = 10
    x +=1
    return function (z){
        return x + z
    } 
}

const a =  getClosure();
const b = getClosure();
var x = 30,y=30;
function getClosureOne(){
    var x = 10;
    return function(){
        console.log(x)
        console.log(y)
    }
}
var inv = getClosureOne();
// inv()
 x = 5
 y=5;
inv()
console.log(a(10),b(10),a === b)
// 10, 30
