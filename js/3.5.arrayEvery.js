const itemsArray = [
    {name: 'Libro de Fundamentos de Programación', costo: 20.5},
    {name: 'Libro de Programación de Estructuras Dinámicas', costo: 15.60},
    {name: 'Libro de Programación Orientada a Objetos', costo: 45},
    {name: 'Libro de Programación WEB', costo: 40},
    {name: 'Libro de Programación de Dispositivos Móviles', costo: 36},
    {name: 'Libro de Análisis de Algoritmos', costo: 43},
    {name: 'Libro de Técnicas de Simulación en Computadoras', costo: 50},
    {name: 'Libro de Programación Declarativa', costo: 35},
    {name: 'Libro de Aplicaciones Código Abierto', costo: 30},
    {name: 'Libro de Teoría de Lenguajes de Programación', costo: 47}
]

const bookPrice = itemsArray.every((item) => {
    return item.costo <= 60
})

console.log("Todos los libros individualmente cuestan menos de $50.00? " + bookPrice)
console.log("\nTRUE: Los libros cuestan menos, FALSE: Los libros cuestan mas")