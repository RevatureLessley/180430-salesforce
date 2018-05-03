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

    var counter = lb;

    for (var i = lb; i <= ub; i++) {
        //formatting bothered me. wanted to consolidate the ' "<br>" + ' from each if statement into one single if statement. I think this works...
        if (i != lb) {
            outbox.innerHTML += "<br>";
            counter++;
        }

        //resolve %3 && %5 first
        if ((i % 3) == 0 && (i % 5) == 0) {
            outbox.innerHTML += "FizzBuzz!";
            counter++;
        }
        else if ((i % 3) == 0) {
            outbox.innerHTML += "Fizz";
            counter++;
        }
        else if ((i % 5) == 0) {
            outbox.innerHTML += "Buzz";
            counter++;
        }
        else {
            outbox.innerHTML += i;
            counter++;
        }
    }

}

function delay(inp) {

    var stop = inp;
    var outbox = document.getElementById("out");
    var counter = 0;

    outbox.innerHTML = "Processing...";

    //delay the function doThing() by "inp" seconds. the parameter is in milliseconds, so that's multiplied by 1000.
    //the extra 1010 milliseconds is just to get a little bit of extra output from this function, and ensure that all
    //of the output is cleared by doThing().
    setTimeout(function () { doThing() }, inp * 1000 + 1010);

    //setInterval is spitting out a countdown timer. it's stored in a variable so I can clear it, to stop the countdown.
    var blip = setInterval(function () {
        outbox.innerHTML += "<br>" + (inp - counter);
        counter++;
        if (counter == stop) {
            clearInterval(blip);
        }
    }, 1000);

}