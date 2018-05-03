function generate() {
    var min_el = document.getElementById("input_min");
    var max_el = document.getElementById("input_max");

    var min = Number(min_el.value);
    var max = Number(max_el.value);

    console.log(min, max);
    if (min > max) {
        console.log("here");
        let new_max = min;
        min = max;
        max = new_max;
    }

    console.log("Attempting to generate fizzbuzz with: [" + min + " " + max + "]");

    var fizzBuzzArr = [];
    for (let i = min; i <= max; i++) {
        var tempStr = "";
        if (i % 3 == 0 || (i % 5) == 0) {
            if ((i % 3 == 0)) {
                tempStr += "Fizz"
            }
            if ((i % 5) == 0) {
                tempStr += "Buzz"
            }
        }
        else {
            tempStr += i;
        }
        fizzBuzzArr.push([i, tempStr]);
    }
    generateResultElements(fizzBuzzArr, min, max);
}

function generateResultElements(fizzBuzzArr, min, max) {
    var results_el = document.getElementById("results");

    results_el.innerHTML = `
        <h5> MIN: ${min}, MAX: ${max} </h5>
        <hr>
    `;

    for (let index in fizzBuzzArr) {
        if (fizzBuzzArr.hasOwnProperty(index)) {
            // console.log( fizzBuzzArr[index] );
            let text = "[" + fizzBuzzArr[index][0] + "] -> [" + fizzBuzzArr[index][1] + "]";

            let textNode = document.createTextNode(text);

            let result = document.createElement('p');

            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);

            result.setAttribute("style", `background-color: rgb(${r},${g},${b})`);

            result.appendChild(textNode);
            results_el.appendChild(result);
        }
    }

}