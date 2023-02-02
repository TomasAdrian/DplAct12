var precioViaje= prompt("Introduzca el precio del viaje");
var dineroDisponible= prompt("Introduzca el dinero disponible");
var num1 = parseInt(precioViaje);
var num2 = parseInt(dineroDisponible);

if(num2>=num1){

    alert("Sácate el billete");
    num2=num2-num1;
}else{

    window.alert("No dispones de suficiente dinero para viajar");
}

window.alert("Te quedan "+ num2 +" euros.");