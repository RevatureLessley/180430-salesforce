let addCount = 0;
function appendText() {
    document.getElementById("para1").innerHTML += "\nAdded Stuff!" + ++addCount<br>;
}

function logit() {
    console.log('Logged it!: ' + ++addCount);
}
function writeToPage() {
    document.write("<h1>Success</h1>");
}
function msg() {
    alert("Hello Javatpoint");
}  

