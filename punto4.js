// PROBLEMA: QUI-GON JINN está encargado de revisar n sables
// de luz y contabilizar la cantidad de energía de sables que tienen
// // negativa en Joules.

// Ejemplo: para la entrada {2,4,-8,5,-6} la cantidad de sables
// defectuosos con energía negativa fue de 2 sables.

let sables=[1,5,6,-4,7,-9]

let sablesnegativ=sables.filter(sable=> sable<0 )

console.log(sablesnegativ.length)