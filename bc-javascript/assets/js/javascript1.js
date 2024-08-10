let nombreVariable = 0
let variableA = 1.0
let sueldoMensual = 1000000
let firstName = "Isaac"
let lastName = 'Mora'
let isMale = true
let isCold = false
let variableB = null
let variable = undefined
//variables para ejercicios
let sueldoAnual = 7500000
let baseImpuestos = 5000000
let edad = 31
let genero = 'femenino'
let nacionalidad = 'Paraguay'
let embarazada = false
/*
*   al ultilzar mas de una condicion la sintaxis es la siguiente
*   && = and, || = or, ! = not 

*   if (codicion1 operador_logio codicion2 ... ) {} ==== if ((c1 && (c2 || c3))) {}
*   -declarar una variable con la edad, una con el genero, otra con nacionalidad y una para saber si esta o no embarazada
*   -imprimnir por con sola cuando una persona de naconaliada extranjera no embarazada y mayor de edada , no paga pasaje en la micro
*/


console.log(firstName, lastName, isCold)


if(edad >= 18){
    console.log('puede entrar')
}



if(sueldoAnual > baseImpuestos){
    console.log('Debe pagar impuestos')
}

if((nacionalidad !== 'Chile') && (embarazada === false) && (edad >= 18)){
    console.log('Esta persona no paga pasaje')
}else{
    console.log('Esta persona debe pagar pasaje')
}

let rango = ''
if (edad <= 10){
    rango = 'nino'
}else if (edad > 10 && edad <= 15){
    rango = 'adolecente'
}else if (edad > 15 && edad <= 21){
    rango = 'adulto joven'
}else if (edad > 21 && edad <= 50){
    rango = 'adulto mayor'
}else{
    rango = 'tercera edad'
}

console.log(`El rango etario es: ${rango}`)

function saludo(){
    return 'Hola'
}

let holaA = saludo()
saludo()

function saludoPersona(nombre, apellido){
    console.log(`${saludo()} ${nombre} ${apellido}`)
}

saludoPersona('Isaac','Mora')
saludoPersona('Mr', 'Worldwide')

let alumnos = ['Isaac', 'Andres'];
let profesores = ['Gabriel'];
profesores.push('Richar')
console.log({alumnos, profesores});
let cantAlumnos = alumnos.length;
console.log(`cantidad alumnos: ${cantAlumnos}`);

let edades = [3,5,10,17,19,41,24,64]
let filterAges = edades.filter(elemento => elemento < 18)
console.log(filterAges)


let sumaTotal = 0
for(let index=0; index < edades.length; index++){
    //sumaTotal = sumaTotal + edades[index]
    sumaTotal = suma(sumaTotal, edades[index])
}

console.log({sumaTotal})

function suma(a,b){
    return a+b
}

let contador = 0
while(contador < 5){
    console.log(`bucle #${contador + 1}`)
    contador++
}

let isExit = false
let cnt = 0
while (isExit === false){
    console.log(`bucle boolean #${cnt + 1}`)
    cnt++
    if(cnt === 10){
        isExit = true
    }
}

function lanzarDados(){
    return 3
}


let numero = 0
do{
    numero = lanzarDados
    console.log('paso')
}while(numero%2 === 0)