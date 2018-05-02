let addCount = 0;
/*
    this function will print to the page
*/
function appendText() {
    document.getElementById("blah").innerHTML += ("<br>Added Stuff! #" + ++addCount);
}

//this function will print to the browser's console
function logit() {
     console.log('Logged it! ' + ++addCount);
}

//this function will write something to the page - to a new page, actually
function writeToPage() {
    document.write("<h1>Document.write!</h1>");
}

function changeWell(){
    var el = document.getElementById("magicWell");

    var random = Math.floor(Math.random()*4);
    switch (random){
        case 0:
            el.setAttribute("style", "background-color:red");
            break;
        case 1:
            el.setAttribute("style", "background-color:green");
            break;
        case 2:
            el.setAttribute("style", "background-color:blue");
            break;
        case 3:
            el.setAttribute("style", "background-color:yellow");
            break;
    }
}

//normally this would be at the top, but it's here just to be safe
var empCounter = 0;
function addEmp(){
    //store input values. the .value will get the value.
    //without .value, you store the input box itself.
    var emp_name = document.getElementById("emp_name").value;

    var fav_dog = document.getElementById("fav_dog").value;

    //create nodes for the text to go in
    //this is the text between the html tags. this does not parse html tags.
    var name_text = document.createTextNode(emp_name); //input 1
    var fav_text = document.createTextNode(fav_dog); //input 2
    var empID = document.createTextNode(++empCounter); //ID counter
    var del = document.createTextNode("X"); //inputs X for our delete button

    var td1 = document.createElement('td'); // <td></td>
    var td2 = document.createElement('td'); // <td></td>
    var td3 = document.createElement('td'); // <td></td>
    var td4 = document.createElement('td'); // <td></td>

    var delBut = document.createElement('button') // <button></button>
    
    //<button onclick="removeRow(empCounter)"></button>
    delBut.setAttribute("onclick", "removeRow(" + empCounter + ")");

    //adds 'style="color:red"' to above
    delBut.setAttribute("style","color:red");

    //appendChild() adds text between the tags.
    delBut.appendChild(del);

    //<td>empID<td>
    td1.appendChild(empID);
    //<td>emp_name</td>
    td2.appendChild(name_text);
    //<td>fav_dog</td>
    td3.appendChild(fav_text);
    //<td>X</td>
    td4.appendChild(delBut);

    //finally, create new row
    var row = document.createElement('tr'); //<tr></tr>
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    /*
    the above lines do this:
    <tr>
        <td>empID<td>
        <td>emp_name</td>
        <td>fav_dog</td>
        <td>
            <button onclick="removeRow(empCounter)" style="color:red">
                X
            </button>
        </td>
    </tr>
    */

    row.setAttribute("id", empCounter);

    document.getElementById("theTable").appendChild(row);
    document.getElementById(emp_name).value = "";
    document.getElementById(fav_dog).value = "";
}

/*
    in the function above, id is set to the current empCounter
    this function will remove the row whose id matches the desired empCounter.
*/
function removeRow(x){
    document.getElementById(x).remove();
}

/*
    window.onload is a property that triggers a callback function to 
    execute once a window has loaded.
*/
window.onload = function(){
    document.getElementById("blah").innerHTML="ONLOAD TEST";


    /*
        while we can use event listeners within html (onclick, etc.),
        we can also use event listeners within this external .js file
    */
    var d1 = document.getElementById("d1");
    var d2 = document.getElementById("d2");
    var d3 = document.getElementById("d3");

    /*
        callback functions. function definitions are passed in
        (d1click, d2click, d3click), rather than calling a function.
    */
    /*
        addEventListener passes 3 arguments:
        event, callback, useCapture. useCapture is false by default
        setting it to true will turn off bubbling. events will resolve in opposite order.
        to disable bubbling AND capturing, use propagation

        capture is resolved before bubble.
        capture first, bubble last.
    */
    d1.addEventListener("click",d1click);
    d2.addEventListener("click",d2click);
    d3.addEventListener("click",d3click);

    function d1click(){
        window.alert("d1 clicked!");
        //event.stopPropagation(); //this line will stop bubbling and capturing for this event
    }
    function d2click(){
        window.alert("d2 clicked!");
        //event.stopPropagation();
    }
    function d3click(){
        window.alert("d3 clicked!");
        //event.stopPropagation();
    }
}