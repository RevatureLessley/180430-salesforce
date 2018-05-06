function validateRegistration(){
    var username = document.forms['register']['username'].value;
    var pass1 = document.forms['register']['password1'].value;
    var pass2 = document.forms['register']['password2'].value;
    var email = document.forms['register']['email'].value;

    var errorDiv = document.createElement("div");
    errorDiv.setAttribute("class", "alert alert-danger");
    errorDiv.setAttribute("id","error");

    if(document.getElementById("error") !=null){
        
    }
}