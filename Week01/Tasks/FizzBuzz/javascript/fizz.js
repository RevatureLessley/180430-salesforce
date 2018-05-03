function count()
{ 
    var runCount = document.getElementById("buzzid").value;
    var i = 1;
    var text = "";
do
 {
    if(runCount == 0 || runCount == "")
    {
        alert("Error, enter a valid number");
    }
    else if(i % 3 == 0 && i % 5 == 0)
    {
        text += "<br>FizzBuzz";
        document.getElementById("displayid").innerHTML = text; 
    } 
    else if(i % 3 == 0)
    {
        text += "<br>Fizz";
        document.getElementById("displayid").innerHTML = text;
    }
    else if(i % 5 == 0)
    {
        text += "<br>Buzz";
        document.getElementById("displayid").innerHTML = text;
    }
    else 
    {
        text += "<br>" + i;
        document.getElementById("displayid").innerHTML = text; 
    }
    i++;
 }
 while(i <= runCount);

}