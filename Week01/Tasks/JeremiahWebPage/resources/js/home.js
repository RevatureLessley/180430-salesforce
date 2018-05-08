function changeColor(curNumber){
    curNumber++;

    if(curNumber > 4){
        curNumber = 1;
    }
    document.getElementById('colors') .setAttribute('class', 'color' + curNumber);
    setTimeout(function(){changeColor(curNumber)}, 500);
}
changeColor(0);
