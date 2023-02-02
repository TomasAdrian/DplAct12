function getAllParaElems()
{
    let menu = document.getElementById('menu');
    let items = menu.getElementsByClassName('item');

    let data = [].map.call(items, item => item.textContent);

    const numbers = [4, 9, 16, 25];
    const newArr = numbers.map(Math.sqrt) 

    const newArr2 = numbers.map(x=>x) 


    const persons = [
      {firstname : "Malcom", lastname: "Reynolds"},
      {firstname : "Kaylee", lastname: "Frye"},
      {firstname : "Jayne", lastname: "Cobb"}
    ];
    
    persons.map(getFullName);
    
    function getFullName(item) {
      return [item.firstname,item.lastname].join(" ");
    }


    var num = items.length;

    alert("Hay " + num + " <class item> elementos en el elemento");
}


