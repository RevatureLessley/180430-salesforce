
function fizzBuzz(){
    document.getElementById("para1").innerHTML = "";//when Submit is pressed, this clears the text output everytime 
                                                    //to ensure nothing is left from past uses
    var numRangeMin = Number(document.getElementById("numRangeMin").value); //variables to store input are casted to reduce errors
    var numRangeMax = Number(document.getElementById("numRangeMax").value);
    var minText = document.createTextNode(numRangeMin);//input1
    var maxText = document.createTextNode(numRangeMax);//input2

    for (var i=numRangeMin; i <= numRangeMax; i++)//this for loop is the algorithm that determines what is printed
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

}//fizzBuzz

