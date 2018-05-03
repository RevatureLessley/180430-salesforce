function doThing() {

    //grab the well in which output will be printed
    var outbox = document.getElementById("out");

    //reset the output every time the button is pressed
    outbox.innerHTML = ""

    

    //grab the user's range input
    var lb = document.getElementById("lo").value;
    var ub = document.getElementById("hi").value;

    console.log(lb);
    console.log(ub);

    for (var i = lb; i <= ub; i++) {
        if ((i % 3) == 0 && (i % 5) == 0) {
            outbox.innerHTML += "<br>" + "FizzBuzz!";
        }
        else if ((i % 3) == 0) {
            outbox.innerHTML += "<br>" + "Fizz";
        }
        else if ((i % 5) == 0) {
            outbox.innerHTML += "<br>" + "Buzz";
        }
        else {
            outbox.innerHTML += "<br>" + i;
        }
    }
}
