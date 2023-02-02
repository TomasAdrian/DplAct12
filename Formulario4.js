function getAllParaElems()
{
  var allParas = document.getElementsByTagName("p");

  var num = allParas.length;

  alert("Hay " + num + " <p> elementos en este documento");
}


function div1ParaElems()
{
  var div1 = document.getElementById("div1")
  var div1Paras = div1.getElementsByTagName("p");

  var num = div1Paras.length;

  alert("Hay " + num + " <p> elementos en el elemento div1");
}


function div2ParaElems()
{
  var div2 = document.getElementById("div2")
  var div2Paras = div2.getElementsByTagName("p");

  var num = div2Paras.length;

  alert("Hay " + num + " <p> elementos en el elemento div2");
}

function pinto()
{

    const collection = document.getElementsByTagName("P");
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.backgroundColor = "red";
    }

}