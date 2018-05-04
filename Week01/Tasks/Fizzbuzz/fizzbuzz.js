// Fizzbuzz.js

function play() {
    document.getElementById("results").innerHTML = ""; // refresh display
    // store user entered range values
    var start = Number(document.getElementById("start").value);
    var end = Number(document.getElementById("end").value);
    console.log(start + ", " + end)

    //logic
    for (let i = start; i < end + 1; i++) {
        if (start != 0 && end != 0) { // if user enters nothing, do nothing
            if (i % 3 == 0) {
                document.getElementById("results").innerHTML += ("<br>FIZZ");
                if (i % 5 == 0) {
                    document.getElementById("results").innerHTML += ("BUZZ");
                }
            } else if (i % 5 == 0) {
                document.getElementById("results").innerHTML += ("<br>BUZZ");
            } else {
                document.getElementById("results").innerHTML += ("<br>" + i);
            }
        }

    }
}

// change color of play button on user click
function change() {
    document.getElementById("btn").style.color = "red";
}
function reset() {
    document.getElementById("btn").style.color = "black";
}