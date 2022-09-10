const itemsArray = [
    {name: 'Libro de Fundamentos de Programación', costo: 20.5},
    {name: 'Libro de Programación de Estructuras Dinámicas', costo: 15.60},
    {name: 'Libro de Programación Orientada a Objetos', costo: 45},
    {name: 'Libro de Programación WEB', costo: 40},
    {name: 'Libro de Programación de Dispositivos Móviles', costo: 36},
    {name: 'Libro de Análisis de Algoritmos', costo: 60},
    {name: 'Libro de Técnicas de Simulación en Computadoras', costo: 60},
    {name: 'Libro de Programación Declarativa', costo: 35},
    {name: 'Libro de Aplicaciones Código Abierto', costo: 30},
    {name: 'Libro de Teoría de Lenguajes de Programación', costo: 100}
]

const advancedTopics = itemsArray.every((item) => {
    return item.ciclo >= 6
})

console.log("Todas las materias son avanzadas?? " + advancedTopics)