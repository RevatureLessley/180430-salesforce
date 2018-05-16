checkAlert = false;
$('#createAcc').click(function () {

    var dangerAlert = $('<div></div>').text('That Account Already Exists');
    dangerAlert.addClass("alert alert-danger");
    dangerAlert.attr("role", "alert");
    dangerAlert.css("margin", "10px");

    var email = $('#email').val();
    var pass = $('#pass').val();


    if(!checkAlert && sessionStorage.getItem(email)){
        $('form').append(dangerAlert);
        $('#email').val('');
        $('#pass').val('');
        checkAlert = true;
    }
    else{
        sessionStorage.setItem(email, pass);
        window.location.href = "signin.html";
    }
});
