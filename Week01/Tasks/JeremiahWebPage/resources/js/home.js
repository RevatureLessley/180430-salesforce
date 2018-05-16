$('#logout').click(function () {
    window.location.href = 'signin.html';
});

$('body').click(function () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    $('body').css('background-color', 'rgb(' + r + ',' + g + ',' + b  + ')');
    $('#colors').html('rgb( ' + r + ', ' + g + ', ' + b + ')');
});

function changeColor(curNumber){
    curNumber++;

    if(curNumber > 4){
        curNumber = 1;
    }
    document.getElementById('colors') .setAttribute('class', 'color' + curNumber);
    setTimeout(function(){changeColor(curNumber)}, 500);
}
changeColor(0);
