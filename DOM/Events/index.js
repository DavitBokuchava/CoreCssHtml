// const div = document.querySelector('div');
//     div.textContent = 'outer'
//     div.style.color = 'green'
//     const inp = document.createElement('input');
//     console.log(inp)
//         div.appendChild(inp)
//         inp.placeholder = 'outer'
//         inp.style.background = 'green'

//         console.log(div,'ext')

// const button = document.querySelector('button');

// let CoolWidget = {
//     init: function () {
//         button.addEventListener('click', (event) => {
//             this.doSomething(event.type)
//         })
//     },
//     doSomething: function (type) {
//         console.log(`Handling ${type} event`, this)
//     }
// }
// CoolWidget.init()
// "use strict"
// const button = document.querySelector('button');

// let CoolWidget = {
//     init: () => {
//         console.log(this, "this")
//         button.addEventListener('click', (event) => {
//             console.log(this)
//             this.doSomething(event.type)
//         }, false)
//     },
//     doSomething: function (type) {
//         console.log(`Handling ${type} event avoeee`)
//     }
// }

// /**
//  * index.js:33 Uncaught TypeError: this.doSomething is not a function
//     at HTMLButtonElement.<anonymous> (index.js:33:18)

//     that's why arrow function is not suitable to use as a method
//  */


// CoolWidget.init()

/////////////////////////////////////////////////////

// parent.onclick =  function (e){
//     console.log(this)
//     console.log(e,"afasf")
// }

// function myClick(e,event){
//     console.log(this)
//     console.log(event, e)
// }

const divs = document.querySelectorAll('div');
const dv = document.querySelector('#level1');

let evt = new CustomEvent('testClick');
document.dispatchEvent(evt);

dv?.addEventListener('testClick', (event)=>{
    console.log(event)
    console.log("event")
})

function fn(el) {
    el.addEventListener('click', (e) => {
        // console.log(el.id)
        console.log(e.currentTarget)
        console.log(e.target)
        console.log(e.eventPhase)
    }, false)
}


divs.forEach(el=>{
    el.addEventListener('click',(e)=>{
        console.log(el.id)
    })
})

divs.forEach(fn)





// parent.addEventListener('click',function(e){
//     console.log(e.target);
//     console.log(this)
// },false)

// console.log(parent)


/**
 * @event.target 
 * - this property can be used in order 
 *   to implement event delegation.
 * - The target event property returns 
 *   the element that triggered the event.
 * @currentTarget
 * - It always refers to the element to 
 *   which the event handler has been attached
 * @eventPhase
 * - if @currentTarget == @target @eventPhase is 2
 *   in other moment it is 3
 * @Event .AT_TARGET (2)
 * @Event .BUBBLING_PHASE (3)
 * 
 * @CastomEvent
 * - let newEvent = new CustomEvent('custEvent',object)
 *   document.dispatchEvent(newEvent)
 *   document.addEventListener('custEvent', (event)=>do something)
 */


/**
 * 
 * 
const ul = document.createElement('ul');
document.body.appendChild(ul);

const li1 = document.createElement('li');
const li2 = document.createElement('li');
ul.appendChild(li1);
ul.appendChild(li2);

function hide(evt) {
  // evt.target refers to the clicked <li> element
  // This is different than evt.currentTarget, which would refer to the parent <ul> in this context
  evt.target.style.visibility = 'hidden';
}

// Attach the listener to the list
// It will fire when each <li> is clicked
ul.addEventListener('click', hide, false);
 * 
 */