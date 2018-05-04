function fbFunction() {
    var range = 10;
    var array = [];
    
    for (i = 0; i < range; i++) {
        array.push(i+1);
    }
    for (j = 0; j < array.length; j++) {
        if (array[j] % 3 == 0) {
            document.getElementById("dis").innerHTML += "Fizz ";
        }
        else if(array[j] % 5 == 0){
            document.getElementById("dis").innerHTML += "Buzz ";
        }
        else if (array[j] % 5 == 0 && array[j] % 3 == 0) {
            document.getElementById("dis").innerHTML += "FizzBuzz ";
        }
        else {
            document.getElementById("dis").innerHTML += array[j]+" ";
        }
        
    }
   
}