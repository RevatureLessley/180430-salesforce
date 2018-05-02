let addCount = 0;
function appendText() {
	document.getElementById("para1").innerHTML+=("<br>Added Stuff! #" +
	++addCount);
}

function logit() {
	console.log('Logged it! #' + ++addCount);
}

function writeToPage(){
	document.write("<h1>SUCCESS</h1>");
}

function changeWell(){
	var el = document.getElementById("magicWell");
	var random = Math.floor((Math.random()*4));
	
	switch(random){
		case 0:
			el.setattribute("style, background-color:red");
			break;
		case 1:
			el.setattribute("style, background-color:blue");
			break;
		case 2:
			el.setattribute("style, background-color:yellow");
			break;
		case 3:
			el.setattribute("style, background-color:green");
			break;
	}
}

var empCounter=0;

function addEmp(){
	// Store the input values first!
	var empName = document=getElementById("empName").value;
	// .value represents content of an input box
	var favDog = document=getElementById("favDog").value;
	
	var nameText = document.createTextNode(empName);   // input1
	var favText = document.createTextNode(favDog);     // input2
	var empId = document.createTextNode(++empCounter); // counter
	var del = document.createTextNode("X");            // X
	
	// Create the elements to store our information
	var td1 = document.createElement('td'); //<td></td>
	var td2 = document.createElement('td'); //<td></td>
	var td3 = document.createElement('td'); //<td></td>
	var td4 = document.createElement('td'); //<td></td>
	
	var delBut = document.createElement('button'); //<button></button>
	delBut.setAttribute("onClick","removeRow(" + empCounter _ ")");
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
	
	row.setAttribute("id", "myCounter")
	
	document.getElementById("theTable").appendChild(row);;
	document.getElementById("empName").value = "";
	document.getElementById("favDog").value = "";
}

function removerow(x){
	document.getElementsById(x).remove(x);
}

/*
	window.onload is a property that triggers a callback function to execute
	once a webpage has been fully loaded.
*/

window.onload = function(){
	document.getElementById("para1").innerHTML="TEST";
}