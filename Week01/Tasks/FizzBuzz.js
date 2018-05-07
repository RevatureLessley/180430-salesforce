function doStuff (){
    var list = document.getElementById("list");
    //list.innerHTML ="";
    var ceiling =Number(document.getElementById("upperNum").value);
    var floor = Number(document.getElementById("lowerNum").value);


    //var ceilingNode = document.createTextNode(ceiling);
    //var floorNode = document.createTextNode(floor);
    var stuff = floor;
    for(var num = floor; num <= ceiling; num++ ){
    
        if (num%3 ==0 && num%5 == 0){
            stuff = "FIZZBUZZ";
        }else if (num%5 == 0){
            stuff = "BUZZ";
        }else if (num%3 == 0){
            stuff = "FIZZ"

        }else{
            stuff = num;
        }
        
        var node = document.createElement('li');
        var textnode = document.createTextNode(stuff);
        node.appendChild(textnode);
        document.getElementById("placeHere").appendChild(node);

    }
}