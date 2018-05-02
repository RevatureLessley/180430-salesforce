let addCount = 0;

function appendText(){
    document.getElementById("para1").innerHTML+=("<br>Added Stuff!" + ++addCount);
}

function logit(){
    console.log("logged it!: " + ++addCount);
}

function writeToPage(){
    document.write("<h1>Success!</h1>");
}

