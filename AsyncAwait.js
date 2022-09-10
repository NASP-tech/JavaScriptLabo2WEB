/**
 * Promises in JavaScript
 */

/**
 * A promise is a commit to do something, and 
 * the promise must resolve the problem
 * or bring an objection if not created
 */

/**
 * Parameter
 */

let p = new Promise((resolve, reject) => {
    //variables
    let a = 1 + 1
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

/**
 * Interaction with promises
 */
p.then((message) => {
    // For success
    console.log('This is in the then ' + message)
}).catch((message) => {
    // For rejected 
    console.log('This is in the catch ' + message)
})
