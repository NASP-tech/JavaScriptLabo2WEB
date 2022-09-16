console.log("\n---------Arreglo de Elementos a Usar:---------\n")
const itemsArray = [
    {name: 'Fundamentos de Programación', semester: 1, price: 20.5},
    {name: 'Programación de Estructuras Dinámicas', semester: 2, price: 15.60},
    {name: 'Programación Orientada a Objetos', semester: 3, price: 45},
    {name: 'Programación WEB', semester: 4, price: 36},
    {name: 'Programación de Dispositivos Móviles', semester: 5, price: 50},
    {name: 'Análisis de Algoritmos', semester: 6, price: 43},
    {name: 'Técnicas de Simulación en Computadoras', semester: 7, price: 35},
    {name: 'Programación Declarativa', semester: 8, price: 30},
    {name: 'Aplicaciones Código Abierto', semester: 9, price: 47},
    {name: 'Teoría de Lenguajes de Programación', semester: 10, price: 25}
]

console.log("Imprimiendo el Arreglo Original \n")
console.log(itemsArray)
console.log("\n------------------\n")

// Array Type for filter
const filteredItems = itemsArray.filter((item) => {
    return item.semester <= 100
})
console.log("Usando Filter: \n")
console.log(filteredItems)

console.log("\n------------------\n")

// Array Type for find
const foundItem = itemsArray.find((item) => {
    return item.name === "Fundamentos de Programación"
})

console.log("Usando Find: \n", foundItem)

console.log("\n------------------\n")

// Array Type for Each
console.log('Usando forEach: ')
itemsArray.forEach((item) => {
    console.log(item.name)
})

console.log("\n------------------\n")

// Array Type for some
const advancedTopics = itemsArray.some((item) => {
    return item.semester >= 6
})

console.log("Usando Some:\n", "Hay materias avanzadas?? " + advancedTopics)

console.log("\n------------------\n")

// Array Type for every
console.log("Usando Every:\n")
const bookPrice = itemsArray.every((item) => {
    return item.price <= 60
})

console.log("Todos los libros individualmente cuestan menos de $50.00? " + bookPrice)
console.log("\nTRUE: Los libros cuestan menos, FALSE: Los libros cuestan mas")

console.log("\n------------------\n")

// Array Type for Reduce
console.log("Usando Reduce:\n")

const total = itemsArray.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

console.log("Total: $",total)

console.log("\n------------------\n")

// Array Type for Includes
console.log("Usando Includes:\n")

const numberArray = [2022, 2023, 2024, 2025, 2026]

const includesNumberinArray = numberArray.includes(2022)

console.log("Se incluye 2022 en el arreglo de años?",includesNumberinArray)

console.log("\n------------------\n")


// Array Type for Map
console.log("Usando Map:\n")
const itemSubjects = itemsArray.map((item) => {
    return item.name
})

const itemSemester = itemsArray.map((item) => {
    return item.semester
})

console.log("Obtener solo las materias: \n", itemSubjects)
console.log("Obtener solo los semestres de la carrera: \n", itemSemester)
console.log("\n------------------\n")