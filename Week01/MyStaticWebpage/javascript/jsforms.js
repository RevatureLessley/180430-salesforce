/**
 * The purpose of any function referenced my 'onsubmit' is that the function must return TRUE 
 * in order for the submission to go through 
 */

 function validateRegistration(){
    var username = document.forms['register']['username'].value;
    var pass1 = document.forms['register']['password1'].value;
    var pass2 = document.forms['register']['password2'].value;
    var email = document.forms['register']['email'].value;

    var errorDiv = document.createElement("div");
    errorDiv.setAttribute("class", "alert alert-danger");
    errorDiv.setAttribute("id", "error");

    if(document.getElementById("error")!=null){
        document.getElementById("error").remove();
    }

    if (pass1!=pass2){
        var text = document.createTextNode("Passwords Dont Match");
        errorDiv.appendChild(text);

        document.getElementById("password1").appendChild(errorDiv);
        return false;
    }
 }