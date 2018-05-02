let addCount = 0;
function appendText(){
    document.getElementById("para1").innerHTML+=("<br>Added Stuff! #" + ++addCount); 
}

function logit(){
    console.log('Logged it !: ' + ++addCount);
}

function writeToPage(){
    document.write("<h1>Success</h1>");
}
function changeTheWell(){
    var el = document.getElementById("magicWell");

    var random  = Math.floor((Math.random())*4);
    switch(random){
        case 0:
        el.setAttribute("style","background-color:red");
        break;
        case 1:
        el.setAttribute("style","background-color:blue");
        break;
        case 2:
        el.setAttribute("style","background-color:yellow");
        break;
        case 3:
        el.setAttribute("style","background-color:green");
        break;
    }
}
var empCounter = 0;
function addEmp(){
    //store input values
    var empName = document.getElementById("empName").value;
    // .value represents content of an input box
    var favDog = document.getElementById("favDog").value;

    // create nodes for the text to go in
    var nameText = document.createTextNode(empName);//input1
    var favText = document.createTextNode(favDog);//input2
    var empId = document.createTextNode(++empCounter);
    var del = document.createTextNode("X");//X

    //Create elements to store info
    var td1 = document.createElement('td');//<td></td>
    var td2 = document.createElement('td');//<td></td>
    var td3 = document.createElement('td');//<td></td>
    var td4 = document.createElement('td');//<td></td>

    var delBut = document.createElement('button');//<button></button>
    delBut.setAttribute("onclick","removeRow(" + empCounter + ")");
    //<button onclick = "removeRow(empCounter)"></button>

    delBut.setAttribute("style", "color:red");
    //<button onclick = "removeRow(empCounter)" style = "color:red"></button>

    delBut.appendChild(del);
    //<button onclick = "removeRow(empCounter)" style = "color:red">X</button>

    td1.appendChild(empId);
    //<td>empId</td>
    td2.appendChild(nameText);
    td3.appendChild(favText);
    td4.appendChild(delBut);

    //create new row
    var row = document.createElement("tr");
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    /*
    <tr>
        <td>empId</td>
    </tr>
    */

    row.setAttribute("id", empCounter);

    document.getElementById("theTable").appendChild(row);
    document.getElementById("empName").value = "";
    document.getElementById("favDog").value = "";
}

function removeRow(x){
    document.getElementById(x).remove();

}


/*
    window.onload is a property that triggers a callback function to execute once a webpage has been fully loaded
*/
window.onload = function(){
    document.getElementById("para1").innerHTML="TEST";

    var d1 = document.getElementById("d1");
    var d2 = document.getElementById("d2");
    var d3 = document.getElementById("d3");

    d1.addEventListener("click", d1click);
    d2.addEventListener("click", d2click);
    d3.addEventListener("click", d3click);
    //addEventListener passes 3 args
    // the event, the callback, useCapture <-- flase by default
    //we can use event propogation to prevent bubbling/capturing in its entirety

    function d1click(event){
        window.alert("d1 clicked!");
        event.stopPropagation();
    }

    function d2click(event){
        window.alert("d2 clicked!");
        event.stopPropagation();

    }

    function d3click(event){
        window.alert("d3 clicked!");
        event.stopPropagation();
    }
}
