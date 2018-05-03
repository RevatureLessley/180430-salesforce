function genFB() {
    if (min === "") {
        var min = document.getElementById("nMin").value;
        var max = document.getElementById("nMax").value;
        var range = (max - min);
        var arr = [];

        document.getElementById("numList").innerHTML = "";

        while (min <= max) {
            if (((min % 3) == 0) && ((min % 5) == 0)) {
                arr += "FIZZBUZZ<br>";
            } else if ((min % 3) == 0) {
                arr += "FIZZ<br>";
            } else if ((min % 5) == 0) {
                arr += "BUZZ<br>";
            } else {
                arr += (min + "<br>");
            }
            min++;
        }
        document.getElementById("numList").innerHTML = arr;
    }
}
