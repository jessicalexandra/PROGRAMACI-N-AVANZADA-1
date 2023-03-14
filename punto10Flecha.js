let alimentosInsecto = ['Abejas','Orugas','hormigas','grillos','saltahojas'];
  
let alimentosAnimales = ['Pollo','Cerdo','Cordero','Pavo','Gallina'];

let alimentosVegetales = ['Lechuga','Espinacas','Brócoli','Zanahoria','Tomate'];
  
let tipos = ['vegetal', 'animal', 'insecto'];

let alimentos = [];

for (let i = 0; i < 1; i++) {
    tipos.forEach(tipo => {
        if (tipo == 'vegetal') {
            alimentosVegetales.forEach(vegetale => {
                alimentos.push({
                    nombre: vegetale,
                    tipo: 'vegetal',
                    nivelEnergia: (Math.floor(Math.random() * 401) + 100)
                });
            })
        } else if(tipo == 'animal') {
            alimentosAnimales.forEach(animal => {
                alimentos.push({
                    nombre: animal,
                    tipo: 'animal',
                    nivelEnergia: (Math.floor(Math.random() * 401) + 100)
                });
            })
        } else {
            alimentosInsecto.forEach(insecto => {
                alimentos.push({
                    nombre: insecto,
                    tipo: 'insecto',
                    nivelEnergia: (Math.floor(Math.random() * 401) + 100)
                });
            })
        }
    })
}

console.log(alimentos)

let getAlimentosVegetales = (alimentos, callback) => {

    setTimeout(() => {
        let  vegetalesMasEnergia = alimentos.filter(alimento => alimento.tipo === "vegetal" && alimento.nivelEnergia > 200);

    
        callback( vegetalesMasEnergia);
    }, 5000)

};

getAlimentosVegetales(alimentos, ( nivelesEnergia) => {
   

    let sumatoria = 0;
    nivelesEnergia.forEach(nivelEnergia => {
        sumatoria += nivelEnergia.nivelEnergia;
    });

    console.log('Sumatoria de las energia de los vegetales: ' + sumatoria)

});