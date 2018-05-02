let addCount = 0;
function appendText(){
    document.getElementById("para1").innerHTML += ("<br>Added Stuff! #" + ++addCount);

}

function logit(){
    console.log('Logged It!: ' + ++addCount);
}

function writeToPage(){
    document.write("<h1>Document.write!</h1>");
}

function changeWell(){
    var el = document.getElementById("magicWell");

    var random = Math.floor((Math.random()*4));
    switch(random){
        case 0:
            el.setAttribute("style", "background-color: red");
            break;
        case 1:
            el.setAttribute("style", "background-color: blue");
            break;
        case 2:
            el.setAttribute("style", "background-color: yellow");
            break;
        case 3:
            el.setAttribute("style", "background-color: green");
            break;
    }
}

var empCounter = 0;
function addEmp(){
    // Store input values first, value represents content of input box
    var empName = document.getElementById("empName").value;

    var favDog = document.getElementById("favDog").value;

    // Create nodes for the text to go in
    var nameText = document.createTextNode(empName); // input1
    var favText = document.createTextNode(favDog); // input 2
    var empID = document.createTextNode(++empCounter); // counter
    var del = document.createTextNode("X"); // X

    // Create the elements to store our information
    var td1 = document.createElement("td"); // <td></td>
    var td2 = document.createElement("td"); // <td></td>
    var td3 = document.createElement("td"); // <td></td>
    var td4 = document.createElement("td"); // <td></td>

    var delBut = document.createElement("button"); // <button></button>

    // <button onclick="removeRow(empCounter)"></button>
    delBut.setAttribute("onclick", "removeRow(" + empCounter + ")");

    // <button onclick="removeRow(empCounter)" style="color: red"></button>
    delBut.setAttribute("style", "color: red");

    // <button onclick="removeRow(empCounter)" style="color: red">X</button>
    delBut.appendChild(del);

    td1.appendChild(empID); // <td>empID</td>
    td2.appendChild(nameText); // <td>empName</td>
    td3.appendChild(favText); // <td>favDog</td>
    td4.appendChild(delBut); // <td><button onclick="removeRow(empCounter)" style="color: red">X</button></td>

    // Finally we create our NEW row
    var row = document.createElement('tr'); // <tr></tr>
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    /*
        <tr>
            <td>empID</td>
            <td>empName</td>
            <td>favDog</td>
            <td><button onclick="removeRow(empCounter)" style="color: red">X</button></td>
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
    window.onload is a property that triggers a callback function to execute once a
    webpage has been fully loaded
*/

window.onload = function(){
    document.getElementById("para1").innerHTML = "TEST";

    var d1 = document.getElementById("d1");
    var d2 = document.getElementById("d2");
    var d3 = document.getElementById("d3");

    // addEventListener passes 3 arguments
    // event, callback, useCapture <- this is set to false by default
    // We can use event propagation to prevent bubbling/capturing in its entirety

    d1.addEventListener("click", d1click);
    d2.addEventListener("click", d2click);
    d3.addEventListener("click", d3click);

    function d1click(event){
        window.alert("d1 clicked");
    }

    function d2click(event){
        window.alert("d2 clicked");
    }

    function d3click(event){
        window.alert("d3 clicked");
    }
}