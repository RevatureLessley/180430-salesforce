let addCount = 0;
function appendText() {
    document.getElementById("para1").innerHTML += ("<br>Added Stuff! #" + ++addCount);
}

function logit() {
    console.log('logged it!: ' + ++addCount)
}
//why do need this?
function writeToPage() {
    document.write("<h1>Document.write!</h1>") //open up new page?
}
function changeWell() {
    var el = document.getElementById("magicWell");

    var random = Math.floor((Math.random() * 4));
    switch(random) {
        case 0:
            el.setAttribute("sytle", "background-color:red");
            break;
        case 1:
            el.setAttribute("sytle", "background-color:blue");
            break;
        case 2:
            el.setAttribute("sytle", "background-color:green");
            break;
        case 3:
            el.setAttribute("sytle", "background-color:black");
            break;
    }
}
var empCounter = 0;
function addEmp() {
    //Store input values first!
    var empName = document.getElementById("empName").value; //.value get value
    //.value repersents content of an input box
    var favDog = document.getElementById("favDog").value;


    //create note for the next to go in
    var nameText = document.createTextNode(empName);    //input1--> Name
    var favText = document.createTextNode(favDog);      //input2--> dog
    var empId = document.createTextNode(++empCounter);  //counter--> counter num
    var del = document.createTextNode("X");             //X      --> for delete

    //create elements to store our information
    var td1 = document.createElement('td'); //<td></td>
    var td2 = document.createElement('td'); //<td></td>
    var td3 = document.createElement('td'); //<td></td>
    var td4 = document.createElement('td'); //<td></td>
    
    // the X we create work as button
    var delBut = document.createElement('button') //<Button></button>
    delBut.setAttribute("onclick", "removeRow(" + empCounter + ")");
    //<button onclick="removeRow(empCounter)></button>
    delBut.setAttribute("style", "color:red");
    //<button onclick="removeRow(empCounter) style="color:red"></button>
    delBut.appendChild(del);
    //<button onclick="removeRow(empCounter) style="color:red">X</button>
    //insert in between the line?
  
    td1.appendChild(empId);//<td>empID</td> Value that save the beginning of function
    td2.appendChild(nameText);//<td>empName</td>
    td3.appendChild(favText);//<td>favDog</td>
    td4.appendChild(delBut);//<td><button onclick="removeRow(empCounter) style="color:red">X</button></td>

    //Finally we create our NEW row
    var row = document.createElement("tr");
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    /*
       <tr>
           <td>empID</td>
           <td>empName</td>
           <td>FavDog</td
           <td><button onclick="removeRow(empCounter) style="color:red">X</button></td>
       </tr>
   */
    row.setAttribute("id", empCounter);

    document.getElementById("theTable").appendChild(row);
    document.getElementById("empName").value = " ";
    document.getElementById("favDog").value = " ";
}
function removeRow(x) {
    document.getElementById(x).remove();
}
/*
    window.onload is a property that triggers a callback function to execute once a
    webpage has been fully loaded.
*/
window.onload = function () {
    document.getElementById("para1").innerHTML = "TEST";

    var d1 = document.getElementById("d1");
    var d2 = document.getElementById("d2");
    var d3 = document.getElementById("d3");

    d1.addEventListener("click", d1click, true);
    d2.addEventListener("click", d2click, true);
    d3.addEventListener("click", d3click, true);
    //addEventListener passes 3 arguments
    //the event the callback use Capture <- this is set to false by default
    //we can use event propogation to prevent bubbling/capturing in it entirety.

    function d1click(event) {
        window.alert("d1 clicked");
      //  event.stopPropagation();
    }
    function d2click(event) {
        window.alert("d2 clicked");
       // event.stopPropagation();
    }
    function d3click(event) {
        window.alert("d3 clicked");
      //  event.stopPropagation();
    }
}

