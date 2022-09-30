// const div = document.querySelector('div');
// console.log(div)

// const x = 'avoe';
// [a,...rest] = x;

// console.log(`${a.toUpperCase()}${rest.join('')}`)
// console.log(`${[a.toUpperCase(),...rest.join('')].join('')}`)

const capitalize = ([s, ...rest]) => {
    console.log([s.toUpperCase(), ...rest].join(''));
}
const capitalizess = (str, str1) => {
    console.log(`${str[0].toUpperCase()}.${str1[0].toUpperCase()}.`);
}
// capitalize('avoe')
// capitalizess('dato','bokuchava')
// console.log([] != null)

function fbn(n, prev = {} ){
    let result
    if(n<=2){
        result =  1;
    }else{
        result =  fbn(n-1) + fbn(n-2)
    }

    console.log(prev[n] === null)
    prev[n] = result
    console.log(prev)

    return result
}
console.log(fbn(5))
console.log(typeof (null + 'fd'))
console.log(typeof (true + 'fd'),true + 'fd')


const x = [1,2,3,"dd","gg","hh"];

console.log(x.filter(el=>typeof el !== 'string'))
// typeof element === 'string'







