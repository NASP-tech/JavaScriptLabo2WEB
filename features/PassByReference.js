/*
BRIEF EXPLANATION
let c = [1, 2]
let d = c
d.push(3)
//now d is:
// d = [1, 2, 3]
d = [3, 4, 5]
*/

//else
let a = [1, 2]
let b = [1, 2]

console.log(`c == d ${a === b}`)
console.log(`c == d ${a == b}`)
//false, because even if they are the same array
// are in differente reference of memory


//if
let c = [1, 2] // Reference = 0x01
let d = c

console.log(`c == d ${c === d}`)
console.log(`c == d ${c == d}`)
//true

console.log(`c = ${c}`)
add(c, 3)
console.log(`c = ${c}`)

function add(array, element) { //Reference = (0x01, 3)
    //Original reference
    //array = [element]

    // Modify by reference
    //array.push(element)

    //other way to modify
    element = element + 2
    array.push(element)
}