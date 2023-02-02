function enfocado(id_objeto) {
    document.getElementById(id_objeto).style.background = "#FFF200";
    }
    
    function desenfocado(id_objeto) {
    document.getElementById(id_objeto).style.background = "white";
    }

function PonerFoco()
{
 let txtApellido =document.getElementById("txtApellido");
 txtApellido.focus();

}

function QuitarFoco()
{
 let txtApellido =document.getElementById("txtApellido");
 txtApellido.blur();

}

function Onload(){
        document.getElementById("txtNombre").focus();
}


//ejercicio, marcar un input con el foco y posteriormente onclir recorrer todos los input y quitar el foco
  