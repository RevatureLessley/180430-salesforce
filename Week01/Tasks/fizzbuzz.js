
function fizzBuzz(){
    document.getElementById("para1").innerHTML = "";
    var numRangeMin = Number(document.getElementById("numRangeMin").value);
    var numRangeMax = Number(document.getElementById("numRangeMax").value);
    var minText = document.createTextNode(numRangeMin);//input1
    var maxText = document.createTextNode(numRangeMax);//input2

    

    for (var i=numRangeMin; i <= numRangeMax; i++)
    {
        if (i % 15 == 0)
            document.getElementById("para1").innerHTML += "<br>FizzBuzz";
        else if (i % 3 == 0)
            document.getElementById("para1").innerHTML += "<br>Fizz";
        else if (i % 5 == 0)
            document.getElementById("para1").innerHTML += "<br>Buzz";
        else
            document.getElementById("para1").innerHTML += "<br>"+ i;

    }//for

}

