// JavaScript Document
var times = 0;
var empCounter = 0;

function appendText(){
	"use strict";
	document.getElementById("para1").innerHTML+="\nFUCK!";
	times += 1;
}

function logIt() {
	"use strict";
	console.log("fuck " + times + " times");
}

function writeIt() {
	"use strict";
	document.write("<h1>Hello!</h1>");
}

function changeWell() {
	"use strict";
	var el = document.getElementById("magicWell");
	
	var random = Math.floor((Math.random()) * 4);
	
	switch (random) {
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
		default:
			break;
	} 
}

function addEmp() {
	"use strict";
	var empName = document.getElementById("empName").value;
	var empEl = document.getElementById("empEl").value;
	//Creates a node for the text to go in
	var nameText = document.createTextNode(empName);
	var animal = document.createTextNode(empEl);
	var empId = document.createTextNode(++empCounter);
	var del = document.createTextNode("X");
	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	var td3 = document.createElement("td");
	var td4 = document.createElement("td");
	var delBut = document.createElement("button");
	
	delBut.setAttribute("onclick", "removeRow(" + empCounter + ")");
	delBut.setAttribute("Style", "color: red");
	delBut.appendChild(del);
	td1.appendChild(empId);
	td2.appendChild(nameText);
	td3.appendChild(animal);
	td4.appendChild(delBut);
	
	var row = document.createElement("tr");
	row.appendChild(td1);
	row.appendChild(td2);
	row.appendChild(td3);
	row.appendChild(td4);
	
	row.setAttribute("id", empCounter);
	document.getElementById("table").appendChild(row);
	document.getElementById("empName").value = "";
	document.getElementById("empEl").value = "";
}

function removeRow(x) {
	"use strict";
	document.getElementById(x).remove();
}

window.onload = function(){
	"use strict";
	document.getElementById("para1").innerHTML="test";
};