class Person {
    constructor(name) { 
        this.name = name
    }

    // More Specific and Helpful
    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name)
        }, 100)
    }

    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name)
        }, 100)
    }
}

let person = new Person('Natalia')
person.printNameArrow()
person.printNameFunction()
console.log(this.name)