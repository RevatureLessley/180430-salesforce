function beginFb() {
    var lowerBound = Number(document.getElementById("lowBound").value);
    var upperBound = Number(document.getElementById("upBound").value);
    clearFb();

    if(upperBound > 1000){
        document.getElementById("fbHeader").innerHTML = ("ERROR: Please use an upper bound of at most 1000.");
    } else if (lowerBound < -1000){
        document.getElementById("fbHeader").innerHTML = ("ERROR: Please use a lower bound of at least -1000.");
    } else if (lowerBound > upperBound) {
        document.getElementById("fbHeader").innerHTML = ("ERROR: Please ensure that the lower bound is lesser than the upper bound.");
    } else {
        document.getElementById("fbHeader").innerHTML = ("Showing FizzBuzz results for range " + lowerBound + " to " + upperBound);
        for (var i = lowerBound; i <= upperBound; i++) {
            document.getElementById("fbResults").innerHTML += checkFb(i) + "<br>";
        }
    }
}

function checkFb(numberToCheck) {
    if (numberToCheck % 3 == 0 && numberToCheck % 5 == 0) {
        return ("FizzBuzz")
    } else if (numberToCheck % 3 == 0) {
        return ("Fizz");
    } else if (numberToCheck % 5 == 0) {
        return ("Buzz");
    } else {
        return numberToCheck;
    }
}

function clearFb(){
    document.getElementById("fbHeader").innerHTML = "";
    document.getElementById("fbResults").innerHTML = "";
    document.getElementById("lowBound").value = "";
    document.getElementById("upBound").value = "";
}