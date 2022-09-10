const itemsArray = [
    {name: 'Fundamentos de Programación', ciclo: 1},
    {name: 'Programación de Estructuras Dinámicas', ciclo: 2},
    {name: 'Programación Orientada a Objetos', ciclo: 3},
    {name: 'Programación WEB', ciclo: 4},
    {name: 'Programación de Dispositivos Móviles', ciclo: 5},
    {name: 'Análisis de Algoritmos', ciclo: 6},
    {name: 'Técnicas de Simulación en Computadoras', ciclo: 7},
    {name: 'Programación Declarativa', ciclo: 8},
    {name: 'Aplicaciones Código Abierto', ciclo: 9},
    {name: 'Teoría de Lenguajes de Programación', ciclo: 10}
]

const foundItem = itemsArray.find((item) => {
    return item.name === "Fundamentos de Programación"
})

console.log(foundItem)