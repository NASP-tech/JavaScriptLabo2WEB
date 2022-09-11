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
    console.log(person && person.address && person.address.street)
    //OR
    /*if(person && person.address){
        console.log(person.address.street)
    }*/
}

const nat = new Person(
    "Natalia",
    {street: "1234 place", city: "Somewhere"},
    ["Volleyball", "Ping Pong", "Classical Music"]
)
nat.print()

printPersonStreet(nat)
// Still works
//printPersonStreet(undefined)