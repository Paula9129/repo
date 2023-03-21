//Bucle while no se va a ver

//Bucles FOR


//Tenemos que ejecutar 300 mensajes por consola que digan "Hola Mundo"

/*for(let i = 1; i <= 300; i = i + 1){
    console.log("La variable i vale: " + i)
    console.log("Hola Mundo")
}*/

//tipos de datos pueden ser primitivos (boolean entra aca) u objetos


//ARRAYS


const listaDeAlumnos = ["Paula", "Maria", "Pepe", "Facundo"]
console.log(listaDeAlumnos[1])
console.log(listaDeAlumnos.length)
console.log(typeof listaDeAlumnos)

//Mostrame por consola a cada alumno
for (let i = 0; i < listaDeAlumnos.length; i = i + 1) {
    console.log(listaDeAlumnos[i])
}


/*let nombre = "pepe"
if(true){
    let nombre = "lucas"
    console.log(nombre)
}
console.log(nombre)*/


//Ejercicio: a partir de estas notas calcular el promedio
const notas1erSemestre = [3, 9, 10]
const notas2doSemestre = [4, 2, 10]
const calcularPromedio = (notas) => {
    let notaSuma = 0
    for(let i = 0; i < notas.length; i = i + 1){
        notaSuma =  notaSuma + notas[i]
    }
    
    return promedio = notaSuma/notas.length
    console.log("el promedio final es: " + promedio)

}
alert("En el primer semestre te sacaste:  " + calcularPromedio(notas1erSemestre)
console.log("Pero en el segundo no majoraste :( nota: " + calcularPromedio(notas2doSemestre)


/*let notaSuma2 = 0
for(let i = 0; i < notas2doSemestre.length; i = i + 1){
    notaSuma2 =  notaSuma2 + notas2doSemestre[i]
}

let promedios = notaSuma2/notas2doSemestre.length
console.log("el promedio final es: " + promedios)*/

//Funciones
/*const saludar = () => {
    console.log("hola mundo")
}
for(let i = 1; i <= 20; i = i + 1){
    saludar()
}*/

/* f(x)= 2x + 1
2 . 20 + 1
41*/

//que se muestre por alerta y por consola
const saludar = (nombre, apellido) => {
    return "hola " + nombre + " " + apellido
}



/*saludar("timba", "suarez")
saludar("pepe", "lopez")*/

let nombre = "pepe"
if(true){
    let nombre = "lucas"
}
console.log(nombre)
console.log(nombre) /


//Mostrar por consola del 1 al 100 todos los numeros pares



/ const averiguarPares = (inicio, final) =>{
    for(let i = inicio; i <= final; i++){
        if(i % 2 == 0){
            console.log(i + " es impar")
        }else{
            console.log(i + " es impar")
        }
    }
}

averiguarPares(77, 99) /


/ let contador = 0 /

/ contador++
contador++
console.log(++contador) /

/ contador += 5
contador += 5 /

const nombres = ["pepe", "maria", "lucas", "juan"]

/ for(let i = 0; i < nombres.length; i++){
    let nombre = nombres[i]
    console.log(nombre)
} /

//FOR..OF
/ for(let nombre of nombres){
    console.log(nombre)
} /

/ const ganancias = [ 213,212132,456773,67575, 6545] /

//Recorrer el array y calcular la ganancia total

/ let gananciaTotal = 0

for(let ganancia of ganancias){
    gananciaTotal += ganancia
}

console.log("La ganancia total del dia es: " + gananciaTotal) /

let dinero = 5
let tengoSueno = true
//voy a comprar si tengo mas de 10 pesos y no tengo sueño
/ if(dinero > 10 && !tengoSueno){
    console.log("voy a comprar")
}else{
    console.log("No voy a comprar")
} /

//voy a comprar si tengo mas de 10 pesos o no tengo sueño

/ if(dinero > 10 || !tengoSueno){
    console.log("voy a comprar")
}else{
    console.log("No voy a comprar")
}