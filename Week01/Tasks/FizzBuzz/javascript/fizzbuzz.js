function count() {
	var max = document.getElementById("maxnum").value;
	console.log("Number " + max + " submitted.");
	
	document.getElementById("numbers").innerHTML = ""; // Clear previous
	
	// All console.log() statements are for me to debug my code.

	
	for (var i = 1; i <= max; i++) {
		if (i % 15 == 0) {
			document.getElementById("numbers").innerHTML += "fizzbuzz ";
		}
		else if (i % 3 == 0) {
			document.getElementById("numbers").innerHTML += "fizz ";
		}
		else if (i % 5 == 0) {
			document.getElementById("numbers").innerHTML += "buzz ";
		}
		else {
			document.getElementById("numbers").innerHTML += (i + " ");
		}
	}
	console.log("Counting complete.");
}