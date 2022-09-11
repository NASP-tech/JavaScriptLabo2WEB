const personOne = {
    name: 'Natalia',
    age: 22,
    studying: {
        currentStatus: "Active",
        year: 2022,
    },
    address: {
        city: 'Someplace',
        country: 'In this World',

    },
    time: {
        today: "Someday"
    }
}

const personTwo = {
    name: 'Alexandra',
    age: 22,
    studying: {
        currentStatus: "Active",
        year: 2022,
    },
    address: {
        city: 'Someplace else',
        country: 'In other World',

    },
    time: {
        today: "Someday"
    }
}

const {
    name: firstname,
    studying: {
        currentStatus
    },
    ...rest
} = personOne

console.log(firstname)
console.log(currentStatus)
console.log(rest)


function printUser({
    name,
    age,
    studying: {
        currentStatus
    },
    time: {today}
}) {
    console.log(`Name: ${name} -> Age: ${age} -> Status: ${currentStatus} -> Date: ${today} `)
}

printUser(personOne)
printUser(personTwo)