// JavaScript Document

function setRange() {
	"use strict";
	var lowEnd = Number(document.getElementById("lend").value);
	var highEnd = Number(document.getElementById("hend").value);
	
	$("#results").empty();
	$("#results").append("<h4>Results<h4>");
	
	if (lowEnd < highEnd) {
		for (var i = lowEnd; i <= highEnd; i++) {
			if (i === 0) {
				$("#results").append("<p>"+ i +"<p>");	
			}
			else if (i % 5 === 0 && i % 3 === 0) {
				$("#results").append("<p>fizzbuzz<p>");
				console.log("fizzbuzz");
			} 
			else if (i % 3 === 0) {
				$("#results").append("<p>fizz<p>");
				console.log("fizz"); 
			} 
			else if (i % 5 === 0) {
				$("#results").append("<p>buzz<p>");
				console.log("buzz");		 
			} 
			else {
				$("#results").append("<p>"+ i +"<p>");
				console.log(i);
			}
		}			
	} else {
		$("#results").append("<p>Massive corn clog in port 7<p>");
		console.error("Massive corn clog in port 7");
	}
}