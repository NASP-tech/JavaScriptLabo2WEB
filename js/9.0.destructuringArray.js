const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

/**
 * Old way
 * const a = alphabet[3]
    const b = alphabet[5]
 */

//Destructuring
const [a, , c, ...rest] = alphabet

const newArray = [...alphabet, ...numbers]


console.log(a)
console.log(c)
console.log(rest)

console.log(newArray)

function sumAndMultiply(a,b){
    return [a+b, a*b]
    // with division
    // return [a+b, a*b, a/b]
}

const [sum, multiply, division = "No division"] = sumAndMultiply(2, 3)

console.log(sum)
console.log(multiply)
console.log(division)
