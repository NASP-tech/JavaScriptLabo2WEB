const webClass = new Promise((resolve, reject) => {
    resolve('Bring WEB class')
})

const OSClass = new Promise((resolve, reject) => {
    resolve('Bring Operating Systems class')
})

const SoftwareClass = new Promise((resolve, reject) => {
    resolve('Bring Software class')
})

Promise.race([
    webClass,
    OSClass,
    SoftwareClass
]).then((message) => {
    console.log(message)
})