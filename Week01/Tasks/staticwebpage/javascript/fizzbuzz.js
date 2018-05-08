function fizzbuzz(){
    
    var list = [];
    for(var i=0; i<num;i++)    {
        list.push(Math.random);
    }

    var num = document.getElementById("userNum").value;
  //  var out = document.getElementById("result");
  //  console.log(out);
    if( (num%3)==0 && (num%5)==0 ){
        for(var i=0; i<list.length;i++)    
          {
            document.getElementById("result").innerHTML = "Fizz Buzz!!";
        }
    }else if( (num%3)==0 && (num%5) !=0)
    {
        document.getElementById("result").innerHTML= "Fizz!";
    }else if( (num%3)!=0 && (num%5)==0)
    {
        document.getElementById("result").innerHTML="Buzz!";
    }
    else if(num == NaN || num == undefined){
        document.getElementById("result").innerHTML="Invalid Input";
    }
}