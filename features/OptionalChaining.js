
class Person {
    constructor(name, address, hobbies){
        this.name = name
        this.address = address
        this.hobbies = hobbies
    }

    print() {
        console.log(this)
    }
}

function printPersonStreet(person){
    // ?. syntax
    console.log(person?.address?.street)    
}

const nat = new Person(
    "Natalia",    
    {street: "1234 place", city: "Somewhere"},
    ["Volleyball", "Ping Pong", "Classical Music"]
)
nat.print?.()

printPersonStreet(nat)
// Still works
//printPersonStreet(undefined)

console.log(nat.hobbies?.[0].toLowerCase())