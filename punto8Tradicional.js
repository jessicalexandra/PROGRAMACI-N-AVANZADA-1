
// recibir un listado de 15 mapas los cuales tienen la siguiente información
//{nombrePlaneta, latitud, longitud, nivel de oxígeno en el planeta, volumen total del agua del planeta}. 
// Sumar la cantidad total de agua de los 15 planetas
 //Sumar y multiplicar por 100 el total de oxigeno de los 15 planetas
 //Encontrar si alguno de los 15 planetas tiene un nivel de oxigeno negativo y de ser así mostrar la información general de este
// Encontrar si alguno de los 15 planetas no tiene agua y mostrar la información general de este

let mapas =[
    {nomPlaneta:"Mercurio", latitud:"norte", longitud: 0.25, niveloxígeno:5.6, volumentotaldelagua:13},
    {nomPlaneta:"Venus", latitud:"sur", longitud: 0.51, niveloxígeno:-6.5, volumentotaldelagua:4},
    {nomPlaneta:"Tierra", latitud:"norte", longitud: 0.68, niveloxígeno:7.4, volumentotaldelagua:90},
    {nomPlaneta:"Marte", latitud:"norte", longitud: 0.65, niveloxígeno:2.1, volumentotaldelagua:0},
    {nomPlaneta:"Júpiter", latitud:"sur", longitud: 0.88, niveloxígeno:3.4, volumentotaldelagua:52},
    {nomPlaneta:"Saturno", latitud:"sur", longitud: 0.64, niveloxígeno:0.6, volumentotaldelagua:15},
    {nomPlaneta:"Urano", latitud:"norte", longitud: 0.79, niveloxígeno:-10.25, volumentotaldelagua:35},
    {nomPlaneta:"Neptuno", latitud:"sur", longitud: 0.52, niveloxígeno:55.2, volumentotaldelagua:0},
    {nomPlaneta:"Plutón", latitud:"norte", longitud: 0.22, niveloxígeno:25.3, volumentotaldelagua:69},
    {nomPlaneta:"Ceres", latitud:"su", longitud: 0.15, niveloxígeno:-34.13, volumentotaldelagua:8},
    {nomPlaneta:"Eris", latitud:"norte", longitud: 0.46, niveloxígeno:16.8, volumentotaldelagua:0},
 ]

 let totalAgua = 0;
 let multiplicar=0;

 for (let i = 0; i < mapas.length; i++) {
     totalAgua += mapas[i].volumentotaldelagua;
 }

 multiplicar= totalAgua * 100;

 let negativo=mapas.filter(function(mapa){ return mapa.niveloxígeno<0})
 console.log("La cantidad total de agua es: " + totalAgua + " El total todo el oxigeno multiplicado en 100 es de: " + multiplicar);
 console.log("planetas con oxigeno negativo")
 console.log(negativo)

 console.log("planetas sin agua")
 let sinAgua=mapas.filter(function(mapa){return mapa.volumentotaldelagua==0})
 console.log(sinAgua)