//PROBLEMA: se necesita clasificar 10 números enteros positivos
// o negativos que contienen códigos de naves de guerra. Diseño
// un algoritmo que permita recibir dichos 10 números e indicar
// ¿Cuál fue el más cercano a cero? (Si el número es negativo se
// debe mostrar el resultado del valor absoluto)//

let numeros=[-1,4,6,7,8,8,-9]
let cerca0=numeros[0]
if (cerca0<0) {
    cerca0=Math.abs(cerca0)
} 
 numeros.forEach(numero => {
    if (numero<0) {
        numero=Math.abs(numero)
    }

    if (numero<cerca0) {
        cerca0=numero
    }
 });
console.log(cerca0)