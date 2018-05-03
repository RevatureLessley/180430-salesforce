function beginFb(){
    var lowerBound = document.getElementById("lowBound").value;
    var upperBound = document.getElementById("upBound").value;

    document.getElementById("fbResults").innerHTML = "";
    document.getElementById("lowBound").innerHTML = "";
    document.getElementById("upBound").innerHTML = "";
    document.getElementById("fbHeader").innerHTML = ("Showing FizzBuzz results for range " + lowerBound + " to " + upperBound);

    for(var i=lowerBound; i <= upperBound; i++){
        document.getElementById("fbResults").innerHTML += checkFb(i) + "<br>";
    }
}

function checkFb(numberToCheck){
    if (numberToCheck % 3 == 0  && numberToCheck % 5 == 0){
        return (numberToCheck + " FizzBuzz")
    } else if (numberToCheck % 3 == 0){
        return (numberToCheck + " Fizz");
    } else if (numberToCheck % 5 == 0){
        return (numberToCheck + " Buzz");
    } else {
        return numberToCheck;
    }
}