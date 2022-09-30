
// class ElementCredintals {
//     constructor(tag, classNames = null, attributes = null, txt = null, value = null, style = null) {
//         this.tag = tag;
//         this.classNames = classNames;
//         this.attributes = attributes;
//         this.txt = txt;
//         this.value = value;
//         this.style = style;
//     }
// }

class CreateElement {
    constructor(tag, classNames = null, attributes = null, txt = null, style = {}) {
        this.tag = tag;
        this.classNames = classNames;
        this.attributes = attributes;
        this.txt = txt;
        this.style = style;
        this.#createElement();
        this.#setAttributes();
        this.#addClassLists();
        this.#setText();
        this.#style();
    }

    #createElement() {
        this.tag = document.createElement(this.tag);
    }

    #setAttributes() {
        if (this.attributes && this.attributes.length > 0) {
            this.attributes.forEach(el => {
                if (el instanceof Array) {
                    this.tag.setAttribute(el[0], el[1])
                }
            })
        }
    }

    #style() {
        if (this.style) {
            Object.keys(this.style).forEach(el => {
                return this.tag.style[el] = this.style[el]
            })
        }
    }

    #addClassLists() {
        if (this.classNames && this.classNames.length > 0) {
            this.tag.classList.add(...this.classNames.join(' '))
        }
    }

    #setText() {
        if (this.txt) {
            // console.log(this.tag.getElementTagName === 'div')
            this.tag.textContent = this.txt
        }
    }

    getElement() {
        return this.tag
    }
}

const textInputName = new CreateElement('input', [], [['name', 'name'], ['type', 'text'], ['value', ''], ['placeholder', 'name']], null, { height: '30px' }).getElement();
const textInputLastName = new CreateElement('input', [], [['name', 'lastName'], ['type', 'text'], ['value', ''], ['placeholder', 'lastname']], null, { height: '30px' }).getElement();
const button = new CreateElement('input', [], [['type', 'button'], ['value', 'Button']], { width: '300px' }).getElement();
const nameOutput = new CreateElement('div', null, [['id', 'name'], ['data-name', 'Name   ']], "Name   ", { color: 'green', height: '50px' }).getElement();
const lastNameOutput = new CreateElement('div', null, [['id', 'lastName'], ['data-name', 'Lastname   ']], "Lastname   ", { color: 'blue', height: '50px' }).getElement();
const debounceOutput = new CreateElement('div', null, [['id', 'debounce'],], 'test', null).getElement();
const inputWrap = new CreateElement('div', null, [['id', 'wrap']], null, { background: 'blue', height: '50px' }).getElement();
const wrp = document.querySelector('#wrap')

document.body.append(nameOutput)
document.body.append(lastNameOutput)
document.body.append(inputWrap)
document.body.append(debounceOutput)
inputWrap.append(textInputName, textInputLastName);
document.body.append(button)

console.log("reload")
class Store {
    constructor(element, output) {
        this.vl = ''
        this.element = element;
        this.output = output;
        this.init = this.output.dataset['name'];
        this.listener = this.element.addEventListener('input', this.handleValue.bind(this))
    }

    generateOutput(str) {
        this.output.textContent = this.init + str
    }

    handleValue(e) {
        this.output.textContent = this.element.value
        this.generateOutput(e.target.value)
    }

    getValue() {
        return this.element.value
    }
}

class Debounce extends Store {
    constructor(input, output, outputDebounce, delay) {
        super(input, output)
        this.outputDebounce = outputDebounce;
        this.delay = delay;
        this.txt = this.getValue()
        console.log(this.outputDebounce, this.getValue())
        // this.updateTxt = this.debounce((()=>this.generateOutput.call(this,this.txt)), this.delay)
        this.updateTxt = this.debounce(()=>{
            this.outputDebounce.textContent = this.getValue()
        }, this.delay)
        // this.db()
        this.element.addEventListener('input',this.updateTxt)
    }

    // generateOutput(txt) {
    //     this.outputDebounce.textContent = txt
    // }

    debounce(cb, delay) {
        let timeout
        console.log('avoe')
        return () => {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                cb()
                console.log('ffff')
            }, delay)
        }
    }

    // db() {
    //     this.updateTxt()
    // }
}

button.addEventListener('click', () => {
    console.log(textInputName.value + ' ' + textInputLastName.value)
})

// const updateTxt = debounce((txt) => {
//     console.log(txt, "afasf")
//     debounceOutput.textContent = txt
// }, 1000)





inputWrap.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
    // let txt = ''
    if (event.target.name) {
        let x = event.target.name
        let output = document.getElementById(x);
        let input = document.querySelector(`[name=${x}]`);
        // const txt = new Store(input, output).getValue()
        const txt = new Debounce(input, output, debounceOutput, 2000)

        // updateTxt(event.target.value);
    }

}, true);



//////////////// FN \\\\\\\\\\\\
    // const updateText = debounce((debounceOutput,txt)=>{
    //     debounceOutput.textContent = txt
    // },1000)

    // console.log(inputWrap.childNodes[0])
    // inputWrap.childNodes[0].addEventListener('input', (e) => {
    //     // console.log(e.target.value)
    //     updateText(debounceOutput,e.target.value)
    // })

    // function generateOutput(txt) {
    //     this.outputDebounce.textContent = txt
    // }
    // function debounce(cb, delay) {
    //     let timeout
    //     console.log('avoe')
    //     return (...args) => {
    //         clearTimeout(timeout)
    //         timeout = setTimeout(() => {
    //             cb(...args)
    //             console.log('ffff')
    //         }, delay)
    //     }
    // }
////////////////////////////////////////////

// const updateDebounceText = debounce((element, txt)=> {
//     element.testContent = txt
// })

// function debounce(cb, delay = 1000) {
//     let timeout

//     return (...args) => {
//         clearTimeout(timeout)
//         timeout = setTimeout(() => {
//             cb(...args)
//         }, delay)
//     }
// }


// inputWrap.addEventListener('blur', (event) => {
//     event.target.style.background = '';
// }, true);


const tst = function (event) {
    console.log(this)
    console.log(event.target.href)
}

// wrp.addEventListener('click', tst, true)










// const initName = nameOutput.textContent
// textInputName.addEventListener('input',(e)=>{
//     console.log(e.currentTarget.value)
//     console.log(initName)
//     nameOutput.textContent = initName +  e.currentTarget.value
// })

// function myFunction(e) {
//     var x = e.clientX;
//     var y = e.clientY;
//     var coor = "Coordinates: (" + x + "," + y + ")";
//     console.log(coor)
//     // document.getElementById("demo").innerHTML = coor;
// }

//   myFunction()



// let tasks = {
//     id: 'id'
// }

// let parentTask = {
//     name: 'name'
// }

// let x = Object.create(parentTask, Object.getOwnPropertyDescriptors(tasks))
// // Object.setPrototypeOf(task,parentTask)
// parentTask.name = 'ggggggg'
// x.name = 5
// console.log(x, tasks, wrap.getAttributeNames().reduce((obj, element) => {
//     return { ...obj, [element]: wrap.getAttribute(element) }
// }, {}))

// // function styleElement(el, styleObject) {
// //     for (const prop in styleObject) {
// //         console.log(prop)
// //     }
// // }

// // styleElement(null, { backgound: 'red' })
// console.log(wrap.style)







