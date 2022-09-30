
/** 
 * 
 *  @create
 *  1 property -- inneHTML to add text or the nodes of html 
    2 Element - document.createElement('elementName');
    3 Text - document.createTextNode('some text');

    @remove
    1 removeChild(element)  method

    @insert
 * element.insertAdjacentHTML('beforeBegin', element)
 * 'beforeBegin'  --- before mentioned element 
 *  'afterEnd'  ----- after mentioned element
 * 'afterBegin'  --- after inside of  mentioned element context
 *  'beforeEnd  ---- before  inside of mentioned element context
 * 
 *  .insertAdjacentText'beforeBegin', text) before and after text
 */

///  create \\\
const addElement = document.createElement('div');
const txt = document.createTextNode('some text');
addElement.appendChild(txt);
document.body.appendChild(addElement)

// console.log(addElement)

/// remove \\\
const parentElement = document.createElement('div');
const n = 5;
function createElementFN(nums) {
    const arr = Array(nums).fill('p')
    return arr;
}
const arrayOfElements = createElementFN(n).map((_, i) => {
    const el = document.createElement('div')
    el.textContent = (i + 1).toString()
    return parentElement.appendChild(el)
});
document.body.appendChild(parentElement);
const elementToRemove = parentElement.getElementsByTagName('div')[parentElement.children.length - 1]
parentElement.removeChild(elementToRemove)

/// insert \\\


const childDivElement = parentElement.children[0];
const newDiv = document.createElement('div');
newDiv.textContent = 'new Element to insert'
// childDivElement.insertAdjacentHTML('beforeBegin', '<div>interted before element </div><div>interted before element</div>')
// // childDivElement.insertAdjacentHTML('beforeBegin', newDiv)
// childDivElement.insertAdjacentHTML('afterEnd', '<div> inserted after element </div><div>interted after element</div>')
// childDivElement.insertAdjacentHTML('beforeEnd', '<div>interted after mentioned element of text node </div><div>interted after mentioned element of text node</div>')
// childDivElement.insertAdjacentHTML('afterBegin', '<div>interted before mentioned element of text node </div><div>interted before mentioned element of text node </div>')

// prepend \\
const toAdd = createElementFN(n).map((el,i)=>{
    const x = document.createElement(el)
    x.textContent = `element number ${i+100}`;
    return x
})


document.body.appendChild(newDiv)
const el = document.createElement('div')
el.textContent = 'changed element instad of the new last element'
// newDiv.prepend(...toAdd)
// newDiv.append(...toAdd) 
// newDiv.before(...toAdd) 
const x = newDiv.after(...toAdd)  // array 
// newDiv.replaceWith(el) 
const removed = parentElement.children[parentElement.children.length-1]
 



console.log(toAdd[0], arrayOfElements,removed)