// JavaScript Document

function retrieve() {
	//Copy this shit
	"use strict";
	var pokemonID = document.getElementById("pokemonID").value;
	var xhr = new XMLHttpRequest();
	var url = "https://pokeapi.co/api/v2/pokemon/" + pokemonID + "/";
	
	console.log("XHR created, state: " + xhr.readyState);
	
	xhr.open("GET", url); //state 1
	
	xhr.onreadystatechange = function() {
		console.log("Ready State is now: " + xhr.readyState);
		
		//copy everything in this if statement, also at top
		if (xhr.readyState === 4 && xhr.status === 200) {
			//Run this code only if the request is finished and successful. 
			var response = JSON.parse(xhr.response);
			
			let pokemonID = document.createTextNode(response.id);
			let pokemonName = document.createTextNode(response.name);
			let pokemonType1 = response.types[0].type.name;
			let pokemonType2 = response.types[1].type.name;
			let type = pokemonType1;
			if (pokemonType2) {type += ", " + pokemonType2;}
			let pokemonPhoto = response.sprites.front_default;			
			
			let td1 = document.createElement("td");
			let td2 = document.createElement("td");
			let td3 = document.createElement("td");
			let td4 = document.createElement("td");
			
			let th1 = document.createElement("th");
			let th2 = document.createElement("th");
			let th3 = document.createElement("th");
			let th4 = document.createElement("th");
			
			let th1t = document.createTextNode("ID");
			let th2t = document.createTextNode("NAME");
			let th3t = document.createTextNode("TYPE");
			let th4t = document.createTextNode("SPRITE");
			
			let img = document.createElement("img");
			img.setAttribute("src", pokemonPhoto);
			
			let tr = document.createElement("tr");
			let table = document.createElement("table");
			table.setAttribute("cell-padding", "10px");
			
			td1.appendChild(pokemonID);
			td2.appendChild(pokemonName);
			td3.appendChild(pokemonType1);
			td4.appendChild(pokemonType2);
			td5.appendChild(pokemonPhoto);
			th1.appendChild(th1t);
			th2.appendChild(th2t);
			th3.appendChild(th3t);
			th4.appendChild(th4t);
			
			
			table.appendChild(tr);
			
			
		} else if (xhr.readyState === 4 &&  xhr.status !== 200) {
			console.error("Error status: " + xhr.status);
		}
	};
	
	xhr.send(); //state 2
}