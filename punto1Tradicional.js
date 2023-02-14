function calcularDistancias(x1,y1,x2,y2) {
    
  
    return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
}

let distanciaCalculada=calcularDistancias(1,1,3,3)
console.log(`la distancia es ${distanciaCalculada} UA`)