$('#changeurl').click(function(event){
    var logins = {
        "jeremiah@awesome.com": "a"
    };

    var loginId = $('#inputEmail').val();
    var pass = $('#inputPassword').val();

    if(logins[loginId] === pass){
        window.location.href = "index.html";
    }
    else{
        alert("ALERT");
    }
});
