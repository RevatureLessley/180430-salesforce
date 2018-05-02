
let addCount = 0;

function appendText ()
{
    document.getElementById("para1").innerHTML += ("<br>AddedStuff!" + ++addCount);
}

function documentWrite()
{
    console.log("sadface");
    document.write(" Howdy partner! ");
}

function changeWell()
{
    var el = document.getElementById("magicWell");

    var random = Math.floor((Math.random() * 4));

    switch (random)
    {
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

function removeRow ( row )
{
    document.getElementById(row).remove();
}

var empCounter = 0;
function addEmp ()
{
    var empName = document.getElementById("e_name").value;
    var favDog = document.getElementById("f_dog").value;

    var nameText = document.createTextNode(empName);
    var favText = document.createTextNode(favDog);
    var empId = document.createTextNode( ++ empCounter );
    var del = document.createTextNode("X");

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var delBut = document.createElement('button');

    delBut.setAttribute("onclick", "removeRow( 'eROW' + " + empCounter + ")" );
    delBut.setAttribute("style", "color:red");
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

    row.setAttribute("id", "eROW" + empCounter)
    document.getElementById("e_table").appendChild(row);
    
    document.getElementById("e_name").value = "";
    document.getElementById("f_dog").value = "";
}

window.onload = function ()
{
    var d1 = document.getElementById("d1");
    var d2 = document.getElementById("d2");
    var d3 = document.getElementById("d3");

    d1.addEventListener("click", d1click); 
    d2.addEventListener("click", d2click); 
    d3.addEventListener("click", d3click); 

    // we can use event propogation to prevent bubbling/capturing in it entirety

    function d1click() { window.alert("d1 clicked!"); };
    function d2click() { window.alert("d2 clicked!"); };
    function d3click(e) { window.alert("d3 clicked!"); e.stopPropagation(); };
}