let addCount = 0;
function appendText() {
  document.getElementById("para1").innerHTML += "<hr><span class='well'> " + ++addCount + "</span> ";
}

function logit() {
  console.log(++addCount);
}

function writeToPage() {
  document.write("<h1> Document Write")
}

// function fizzBuzz() {
//   for ( let i = 1; i < 100; i++)
//   {
//     let num = "";
//     if( (i % 3) == 0) {
//       num += "Fizz";
//     }
//     if( (i % 5) == 0) {
//       num += "Buzz";
//     }
//     if(num === "") {
//       document.getElementById("fizzbuzz").innerHTML += i + "<hr>";
//     } else {
//       document.getElementById("fizzbuzz").innerHTML += num + "<hr>";
//     }
//   }
// }
function changeWell(){
  var el = document.getElementById("magic-well");
  var random = Math.floor((Math.random()*4));
  switch(random) {
    case 0: el.setAttribute("style", "background-color: red");
    break;
    case 1: el.setAttribute("style", "background-color: blue");
    break;
    case 2: el.setAttribute("style", "background-color: green");
    break;
    case 3: el.setAttribute("style", "background-color: yellow");
    break;
  }
}
var empCounter= 0
function addEmp() {
  var empName = document.getElementById("empName").value;
  var empName = document.getElementById("favDog").value;
  var nameText = document.createTextNode(empName);
  var favText = document.createTextNode(favDog);
  var empId = document.createTextNode(++empConter);
  var del = document.createTextNode("X");

  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');

  var delBut = document.createElement('button');
  delBut.setAttribute("onclick", "removeRow(" + empCounter + ")");
  delBut.setAttribute("style", "color:red");
  delBut.appendChild(del);

  td1.appendChild(empId);
  td2.appendChild(nameText);
  td3.appendChild(favText);
  td4.appendChild(delBut);

  var row = document.createElement("tr");
  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);

  row.setAttribute("id", empCounter);
  document.getElementById("theTable").appendChild(row);
  document.getElementById("empName").value = "";
  document.getElementById("favDog").value = "";

}

function removeRow(){
  document.getElementById(x).remove();
}
// window.onload is a property that riggers a callback function to
// exicute once a webpage has been fully loaded.
