var para = document.createElement("p");
var count = 1;
function fortune(){
    var num = Math.floor(Math.random() * 10);
    if(count == 1){
    switch(num){
        case 0:
         var node = document.createTextNode("A beautiful, smart, and loving person will be coming into your life.");
        break;
        case 1:
        var node = document.createTextNode("A fresh start will put you on your way.");
        break;
        case 2:
        var node = document.createTextNode("A lifetime of happiness lies ahead of you.");
        break;
        case 3:
        var node = document.createTextNode("A lifetime friend shall soon be made.");
        break;
        case 4:
        var node = document.createTextNode("A golden egg of opportunity falls into your lap this month.");
        break;
        case 5:
        var node = document.createTextNode("All the effort you are making will ultimately pay off.");
        break;
        case 6:
        var node = document.createTextNode("All the troubles you have will pass away very quickly.");
        break;
        case 7:
        var node = document.createTextNode("Don’t be discouraged, because every wrong attempt discarded is another step ");
        break;
        case 8:
        var node = document.createTextNode("Happiness will bring you good luck.");
        break;
        case 9:
        var node = document.createTextNode("Long life is in store for you.");
        break;
        default:
        var node = document.createTextNode("One of the first things you should look for in a problem is its positive side.");
        break;
    }
}
    count++;


    para.appendChild(node);
   
        var element = document.getElementById("div1");
        element.appendChild(para);
}