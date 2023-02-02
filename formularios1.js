
function getElement()
{
    var txtNombre=document.getElementById("txtNombre");
    txtNombre.disabled =true;  
    alert(txtNombre.value);  
  
    var txtApellido1=document.getElementsByName("txtApellido1")[0].value
    alert(txtApellido1);  
    
    var btnEnviar = document.getElementById("btnEnviar");
    btnEnviar.disabled=true;
}














function getElementChecks2()
{ 
    var chkUK = document.getElementById('chkUK');
    var chkUsa = document.getElementById('chkUsa');
    var chkIL = document.getElementById('chkIL');
    var chkMA = document.getElementById('chkMA');
    var chkUT = document.getElementById('chkUT');
    var chkES = document.getElementById('chkES');

    let resultado = new Array();
   
    if(chkUK.checked == true)
    {
        resultado.push(chkUK.value)
    } else if (chkUsa.checked == true){  
        resultado.push(chkUsa.value)
    }
   serializaElementChecks(resultado);

}

function getElementChecks3()
{
    var chks = document.getElementsByName('eurpaChcek');

    let resultado = new Array();

    for(var i = 0; i < chks.length; i++){
        chks[i].checked ? resultado.push(chks[i].value):"";
    }

    serializaElementChecks(resultado);

}

function serializaElementChecks(seleccionados)
{
    for(var i = 0; i < seleccionados.length; i++){
        alert(seleccionados[i]);
    }
}

function chekAllType()
{
   // The querySelector() finds the first element that matches 
   // The querySelectorAll() finds all elements that match  .

    var inputs = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < inputs.length; i++) {   
        inputs[i].checked = true;   
    } 
}


function chekAllClass()
{
    var inputs = document.querySelectorAll('.chk');   
    for (var i = 0; i < inputs.length; i++) {   
        inputs[i].checked = true;   
    }  

}

function chekAllClass2()
{
    var inputs = document.getElementsByClassName('chk');   
    for (var i = 0; i < inputs.length; i++) {   
        inputs[i].checked = true;   
    }  

}
