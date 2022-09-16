const itemsArray = [
    {name: 'Fundamentos de Programación', semester: 1},
    {name: 'Programación de Estructuras Dinámicas', semester: 2},
    {name: 'Programación Orientada a Objetos', semester: 3},
    {name: 'Programación WEB', semester: 4},
    {name: 'Programación de Dispositivos Móviles', semester: 5},
    {name: 'Análisis de Algoritmos', semester: 6},
    {name: 'Técnicas de Simulación en Computadoras', semester: 7},
    {name: 'Programación Declarativa', semester: 8},
    {name: 'Aplicaciones Código Abierto', semester: 9},
    {name: 'Teoría de Lenguajes de Programación', semester: 10}
]

const itemSubjects = itemsArray.map((item) => {
    return item.name
})

const itemSemester = itemsArray.map((item) => {
    return item.semester
})

console.log("Obtener solo las materias: \n", itemSubjects)
console.log("Obtener solo los semestres de la carrera: \n", itemSemester)

