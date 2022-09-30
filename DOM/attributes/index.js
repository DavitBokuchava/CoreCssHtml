const nd = document.querySelector('div');

/**
 *  @attributes
 * getAtribute('attribute') not only for class attribute
 * el.classList
 * el.setAttribute('attributeName','value  Of attribute')
 * removeAttribute('attribute')
 */
 nd.setAttribute('name','n')
 nd.style.color = 'red'
console.log(nd?.attributes,nd.attributes.length, nd.classList,nd.getAttribute('style'))