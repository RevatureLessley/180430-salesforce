var entry = [];
var count = 0;

function input(){
    var inputMin = document.getElementById("min").value;
    if(!testInput(inputMin)){
        document.getElementById("min").value = "";
        document.getElementById("min").focus();
    }
    var inputMax = document.getElementById("max").value;
    if(!testInput(inputMax)){
        document.getElementById("max").value = "";
        document.getElementById("max").focus();
    }
    if(inputMin>inputMax){
        for(var i = inputMax; i <= inputMin; i++){
            entry[count] = i;
            count++;
        }
    }
    else{
        for(var i = inputMin; i <= inputMax; i++){
            entry[count] = i;
            count++;
        }
    }
    count = 0;
    output(entry);
}

function output(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i]%5 == 0 && arr[i]%3 == 0){
            addEmp("FizzBuzz", i);
        }
        else if(arr[i]%3 == 0){
            addEmp("Fizz", i);
        }
        else if(arr[i]%5 == 0){
            addEmp("Buzz", i);
        }
        else{
            addEmp(arr[i], i);
        }
    }
}

function testInput(number){
    if(number != "/[0-9]\g/"){
        return false;
    }
    return true;
}

var empCounter=0;
function addEmp(value, rowId){
    //Store input values first!
    //var empName = document.getElementById("empName").value;
    //.value represents content of an input box
    //var favDog = document.getElementById("favDog").value;

    //Create nodes for the text to go in
    var row = document.createTextNode(rowId); //input1
    var val = document.createTextNode(value);   //input2
    //var empId = document.createTextNode(++empCounter);//counter
    //var del = document.createTextNode("X");          //X

    //Create the elements to store our information
    var td1 = document.createElement('td'); //<td></td>
    var td2 = document.createElement('td'); //<td></td>
    //var td3 = document.createElement('td'); //<td></td>
    //var td4 = document.createElement('td'); //<td></td>

    //var delBut = document.createElement('button'); //<button></button>
    //delBut.setAttribute("onclick","removeRow(" + empCounter + ")");
    //<button onclick="removeRow(empCounter)></button>
    //delBut.setAttribute("style","color:red");
    //<button onclick="removeRow(empCounter) style="color:red"></button>
    //delBut.appendChild(del);
    //<button onclick="removeRow(empCounter) style="color:red">X</button>

    td1.appendChild(row);
    //<td>empID</td>
    td2.appendChild(val);
    //<td>empName</td>
    //td3.appendChild(favText);
    //<td>FavDog</td
    //td4.appendChild(delBut);
    //<td><button onclick="removeRow(empCounter) style="color:red">X</button></td>

    //Finally we create our NEW row
    var newRow = document.createElement("tr"); //<tr></tr>
    newRow.appendChild(td1);
    newRow.appendChild(td2);
    //row.appendChild(td3);
    //row.appendChild(td4);
    /*
        <tr>
            <td>empID</td>
            <td>empName</td>
            <td>FavDog</td
            <td><button onclick="removeRow(empCounter) style="color:red">X</button></td>
        </tr>
    */

    newRow.setAttribute("id", rowId);

    document.getElementById("table").appendChild(newRow);
    document.getElementById("min").value = "";
    document.getElementById("max").value = "";
    document.getElementById("min").focus();
}