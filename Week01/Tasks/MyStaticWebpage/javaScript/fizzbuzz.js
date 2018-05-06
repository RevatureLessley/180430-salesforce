function fizzbuzz(){
    var min = document.getElementById("min").value;
    var max = document.getElementById("max").value;


    var p = document.createElement("p");
    
    for(var i = min; i<=max; i++){
        var para = document.createElement("p");
        
        if(i%3==0){
           var node = document.createTextNode("FIZZ");

           console.log("FIZZ");
        }else if(i%5==0){
           console.log("BUZZ");
           var node = document.createTextNode("BUZZ");

        }else if(i%3==0 && i%5==0){
           console.log("FIZZBUZZ");
           var node = document.createTextNode("FIZZBUZZ");

        }else{
          console.log(i);
            var node = document.createTextNode(i);
            
        }
        para.appendChild(node);
   
        var element = document.getElementById("div1");
        element.appendChild(para);
    }


}
function reset(){
    location.reload();    
}