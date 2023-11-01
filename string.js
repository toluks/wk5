//String method

//Uppercase

let str = document.querySelector('h1').textContent
//alert(str)

const list = document.querySelectorAll('ul li')

//uppercase
list[0].textContent += str.toUpperCase()

//lowercase
list[1].textContent += str.toLowerCase()

//length
list[2].innerHTML += `The number of characters are ${str.length}`

//first member in str
list[3].innerHTML += str[0]

//last member in str
list[4].innerHTML += str[str.length - 1]

//indexOf
list[5].innerHTML += `Dog is located at index ${str.indexOf('dog')}`
list[6].innerText += `Goat is located at index ${str.indexOf('goatS')}`

//lastIndexOf
list[7].innerText += `The last index of 'the' is ${str.lastIndexOf('the')}`

//replace
list[8].innerHTML += `replace 'the' with 'that' <strong>${str.replace('the','that')}</strong>`

//replaceAll
list[9].innerHTML += `replace 'the' with 'that' <strong>${str.replaceAll('the','that')}</strong>`

//charAt
list[10].innerHTML += `find character at '6' <strong>${str.charAt(6)}</strong>`

//slice
list[11].innerHTML += `cut out from 1 - 5: <strong>${str.slice(1-5)}</strong>`

//split
list[12].innerHTML += `remove all spaces <strong>${str.split(" ") }</strong>`







