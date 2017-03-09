document.write('vamos a jugar a pares y nones');
var TiradaJugador1=prompt('jugador1 elije un numero del 1 al 5');
document.write('el jugador 1 ha sacado' + jugador1);
var TiradaJugador2=prompt('jugador2 elije un numero del 1 al 5');
document.write('el jugador 2 ha sacado'+ jugador2);
TiradaJugador1=Number(TiradaJugador1);
TiradaJugador2=Number(TiradaJugador2);
var suma=TiradaJugador1 + TiradaJugador2;
document.write('la suma de jugadas es =' + suma)

if(suma % 2 === 0){ 
    document.write('ha ganado el jugador1');
}
else{
    document.write('ha ganado el jugador 2');
}
