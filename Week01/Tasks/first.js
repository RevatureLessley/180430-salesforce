var addCount = 0;

function appendText(){
    
    document.getElementById("para1").innerHTML += ("<br>Added Stuff! #" + ++addCount ); 
}


function writeToPage(){
    document.write 
}

window.onload=function(){
    document .getElementById("para1").innerHTML="TEST";
}

function changeWell(){
    var el = document.getElementById("magi84cWell");
    var random = Math.floor((Math.random()));
    switch(random){
        case 0:
        el.setAttribute("style","background-color:red");
        break;
        case 1:
        el.setAttribute("style","background-color:blue");
        break;
        case 2:
        el.setAttribute("style","background-color:green");
        break;
        case 3:
        el.setAttribute("style","background-color:yellow");
        break;
    }

}
var empCounter = 0;
function addEmp()
{
    var empName = document.getElementById("emp_name").values;
    var favDog = document.getElementById("favDog").values;
    //create nodes for the tect to go to 
    var nameText = document.createTextNode(empName);
    var favText = document.createTextNode(favDogs);
    var empId = document.createTextNode(++empCounter);

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');

    var delBut = document.createElement('button');
    delBut.setAttribute("onClick","removeRow( + empCounter + ");
    delBut.setAttribute("style","color:red");
    delBut.appendChild(del);
    td1.appenChild(empId);
    td2.appendChild(nameText);
    td3.appendChild(favText);
    td4.appendChild(delBut);

    var row = document.createElement("tr");
    row.appendChild("td1");
    row.appendChild("td2");
    row.appendChild("td3");
    row.appendChild("td4");

    row.setAttribute("id",empCounter);
    document.getElementById("theTable").appendChild(row)
    document.getElementById("empName").value = "";
    document.getElementById("favDog").value + "";

    function removeRow(x){
        document.getElementById(x).remove();
    }

}



