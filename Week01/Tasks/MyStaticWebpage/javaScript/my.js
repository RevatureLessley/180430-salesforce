
let addCounter = 0;
function appendText(){
    document.getElementById("para2").innerHTML += "somthin else" + ++addCounter + "<br>";
}
function writeToPage(){
    document.write("<b>Hello</b>");
}
/*
window.onload execuites after the page is fully loaded
*/
window.onload = function(){
    document.getElementById("para1").innerHTML = "TEST";

    var d1 = this.document.getElementById("d1");
    var d2 = this.document.getElementById("d2");
    var d3 = this.document.getElementById("d3");

    d1.addEventListener("click",d1click, true);
    d2.addEventListener("click",d2click,true);
    d3.addEventListener("click",d3click, true);
    //addEventListener passes 3 elements
    // we can use event propogation to prevent event bubbling or capturing in it entierly.  
    function d1click(){
        window.alert("D1 clicked");
        event.stopPropagation();
    }

    function d2click(){
        window.alert("D2 clicked");
    }

    function d2click(){
        window.alert("D3 clicked");
    }
}

var empCounter = 0;
function addEmp(){
    var empName  = document.getElementById("empName").value;
    var empDog  = document.getElementById("empDog").value;

    var nameText = document.createTextNode(empName);
    var favText = document.createTextNode(empDog);
    var empId = document.createTextNode(++empCounter);
    var del = document.createTextNode("X");

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');

    var delBut = document.createElement('button');
    delBut.setAttribute("onClick","removeRow(" + empCounter + ")");
    delBut.setAttribute("style","color:red");
    
    delBut.appendChild(del);

    td1.appendChild(empId);
    td2.appendChild(nameText);
    td3.appendChild(favText);
    td4.appendChild(delBut);

    var row = document.createElement("tr");

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);


    row.setAttribute("id",empCounter);

    document.getElementById("theTable").appendChild(row);
    document.getElementById("empName").value = "";
    document.getElementById("empDog").value = "";

}

function removeRow(x){
    document.getElementById(x).remove();
}