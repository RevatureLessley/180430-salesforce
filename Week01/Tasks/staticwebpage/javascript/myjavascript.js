let addCount = 0;
function appendText(){

    document.getElementById("para1").innerHTML+="Added stuff #" + ++addCount;

}
function writeToPage(){
    document.write("<h1>Success!</h2>");
}

function changeWell(){
    var el = document.getElementById("magicWell");

    var random = Math.floor((Math.random()*4));

    switch(random){
        case 0 :
        el.setAttribute("style", "background-color:red");
        break;
        case 2 :
        el.setAttribute("style", "background-color:blue");
        break;
        case 3 :
        el.setAttribute("style", "background-color:orange");
        break;
        case 4 :
        el.setAttribute("style", "background-color:grey");
        break;
        case 5 :
        el.setAttribute("style", "background-color:violet");
        break;

    }
}
var empCounter = 0;
function addEmp(){
    var empName = document.getElementById("empName");
    var favDog = document.getElementById("favDog");

    var nameText = document.createTextNode(empName);
    var favText = document.createTextNode(favDog);
    var empId = document.createTextNode(++empCounter);
    var del = document.createTextNode("X");

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');

    var delBut = document.createElement('button');
    delBut.setAttribute("onClick","removeRow(" + empCounter +")");

    delBut.setAttribute("style","color:red");
    delBut.appendChild(del);


    td1.appendChild(empId);
    td2.appendChild(nameText);
    td3.appendChild(favText);
    td4.appendChild(delBut);


    var row = document.createElement('tr');
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);



        row.setAttribute("id",empCounter);

        document.getElementById("theTable").appendChild(row);
        document.getElementById("empName").value ="";
        document.getElementById("favDog").value = "";

}
function removeRow(X){
    document.getElementById(X).remove();
}


window.onload = function(){


    var d1 = document.getElementById("d1");
    var d2 = document.getElementById("d2");
    var d3 = document.getElementById("d3");

    
  //  d1.addEventListener("click", d1click);
  //  d2.addEventListener("click", d2click);
  //  d3.addEventListener("click", d3click);
  
    function d1click(event){
       
        window.alert("d1 clicked");
       event.stopPropagation();
    }
    function d2click(event){
        window.alert("d2 clicked");
        event.stopPropagation();
    }
    function d3click(event){
        window.alert("d3 clicked");
       event.stopPropagation();
    }

}