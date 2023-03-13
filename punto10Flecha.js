const alimentosInsecto = ['Abejas','Orugas','hormigas','grillos','saltahojas'];
  
const alimentosAnimales = ['Pollo','Cerdo','Cordero','Pavo','Gallina'];

const alimentosVegetales = ['Lechuga','Espinacas','Brócoli','Zanahoria','Tomate'];
  
const tipos = ['vegetal', 'animal', 'insecto'];

const alimentos = [];

for (let i = 0; i < 20; i++) {
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

const getAlimentosVegetales = (alimentos, callback) => {

    setTimeout(() => {
        const  vegetalesMasEnergia = alimentos.filter(alimento => alimento.tipo === "vegetal" && alimento.nivelEnergia > 200);

        if (vegetalesMasEnergia.length === 0) {
            callback(`No hay informacion de los vegetales`);
            return;
        }
        callback(null, vegetalesMasEnergia);
    }, 5000)

};

getAlimentosVegetales(alimentos, (error, nivelesEnergia) => {
    if (error) {
        console.log(error)
        return;
    }

    let sumatoria = 0;
    nivelesEnergia.forEach(nivelEnergia => {
        sumatoria += nivelEnergia.nivelEnergia;
    });

    console.log('Sumatoria de las energia de los vegetales: ' + sumatoria)

});