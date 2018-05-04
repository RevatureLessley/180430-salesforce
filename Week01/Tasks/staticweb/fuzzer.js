//clears input fields and page data
function clear() {
  console.log("cleared");
  document.getElementById("fizzbuzz").innerHTML = "";
  document.getElementById("lower").value = "";
  document.getElementById("upper").value = "";
}

// jQuery handler for clear function
$(function(){
  $("#clear").click(clear);
});

// clears previous page data
// fizz buzz function, checks upper > lower, upper == lower
function fizzBuzz() {
  document.getElementById("fizzbuzz").innerHTML = "";
  document.getElementById("fizz-container").setAttribute("class","" );
  var lower = Number(document.getElementById("lower").value);
  var upper = Number(document.getElementById("upper").value);
  if (lower >= upper ) {
    document.getElementById("fizzbuzz").innerHTML = "<b> Your upper bound values must be greater than your lower bound </b>";
    document.getElementById("fizz-container").setAttribute("class", " text-danger");
  } else {
    document.getElementById("fizz-container").setAttribute("style", "");
    for ( let i = lower; i <= upper; i++)
    {
      let num = "";
      if( (i % 3) == 0) {

        num += "Fizz";
      }
      if( (i % 5) == 0) {
        num += "Buzz";
      }
      if(num === "") {
        document.getElementById("fizzbuzz").innerHTML += i + "<hr>";
      } else {
        document.getElementById("fizzbuzz").innerHTML += num + "<hr>";
      }

  }
  }
}
