//map modifica en valor de una variable ya declarada
//foreach recorre el arreglo al igual que for (of)


const valores = [200,100,500,300, 250]
const nuevos_valores = valores.map(valor => 2*valor)
nuevos_valores.forEach(valor => console.log(nuevos_valores))
