// PROBLEMA: Para habilitar la guerra de los clones es necesario
// clasificar la edad de estos, elabore un programa que permita
// recibir 20 edades y 20 códigos diferentes generadas
// aleatoriamente y determine cual de esas edades es la mayor. Si
// se repite la misma edad se debe contar el número de
// repeticiones

function edades() {
    let edades=[]
    for (let i = 0; i < 20; i++) {
        edades.push(Math.floor(Math.random()*10));
        
    }
    return(edades)
}


function codigos() {
    let codigos=[]
    for (let i = 0; i < 20; i++) {
        codigos.push(Math.floor(1000 + Math.random()* 9000));
        
    }
    return(codigos)
}

let listaedades=edades()
function edadmayor(edades) {
    let mayor=0;
    console.log(edades);
    edades.forEach(function(edad) {
        if (edad>=mayor) {
            mayor=edad;
        }
    });

    return mayor;

}
let mayor=edadmayor(listaedades)
function edadRepetida(edades,edadmayor) {
    let i = 0;
   edades.forEach(function(edad){

    if (edadmayor==edad) {
        i++;
    }
})
  
return i
}

console.log(listaedades)
console.log(edadRepetida(listaedades, mayor));

// console.log(edadmayor(edades()));
// console.log("Cantidad", edadRepetida(edades()));