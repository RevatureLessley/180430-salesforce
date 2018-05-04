
function fizzBuzz() {
  document.getElementById("fizzbuzz").innerHTML = "";
  var lower = Number(document.getElementById("lower").value);
  var upper = Number(document.getElementById("upper").value);
  if (lower >= upper ) {
  document.getElementById("fizzbuzz").innerHTML = "<b> Your upper boud values must be greater than your lower bound </b>";
  document.getElementById("fizz-container").setAttribute("style", "background: #ff4444");
} else {
  document.getElementById("fizz-container").setAttribute("style", "");
}
    var fizzobj = {};
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

function clear() {
  console.log("cleared");
  document.getElementById("fizzbuzz").innerHTML = "";
  document.getElementById("lower").value = "";
  document.getElementById("upper").value = "";
}
