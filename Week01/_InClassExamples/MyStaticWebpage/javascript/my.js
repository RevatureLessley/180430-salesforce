let addCount = 0;
function appendText(){
    document.getElementById("para1").innerHTML += ("<br>Added stuff! #" + ++addCount);//prefix
}

function logit() {
    console.log('Logged it!: ' + ++addCount);
}

function writeit(){
    document.write("<h2>Write it</h2><p>to the screen</p>");    
}