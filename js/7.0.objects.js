const firstName = "Natalia"
const age = 22

const person = {
    [firstName] : 'Alexandra',
    firstName,
    age,
    print() {
        console.log(
            `Name: ${this.firstName}`,
            `Age: ${this.age}`
        )
    }
}

person.print()

console.log(person)