alertCheck = false;

var count = 0;
setInterval(function(){
    var dots = new Array(++count % 5).join('.');
    document.getElementById('heading1').innerHTML = "Sign In" + dots;
}, 800);

$('#changeurl').click(function(){

    var dangerAlert = $('<div></div>').text('Invalid Account Information');
    dangerAlert.addClass("alert alert-danger");
    dangerAlert.attr("role", "alert");
    dangerAlert.css("margin", "10px");

    var loginId = $('#inputEmail').val();
    var pass = $('#inputPassword').val();

    if(sessionStorage.getItem(loginId) === pass){
        window.location.href = "index.html";
    }
    else if(alertCheck){
        $('#inputEmail').val('');
        $('#inputPassword').val('');
    }
    else{
        alertCheck = true;
        $('#inputEmail').val('');
        $('#inputPassword').val('');
        $('.form-signin').append(dangerAlert);
    }
});

$('#signup').click(function () {
    window.location.href = "signup.html";
});
