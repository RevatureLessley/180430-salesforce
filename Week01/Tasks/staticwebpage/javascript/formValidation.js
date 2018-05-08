/**
 * The perpose of any function referenced by 'on submit' is that the function must return TRUE in order for hte submission to
 * go through.
 */
function validateRegistration()
{
    console.log("in the function");
    var username = document.forms['register']['username'].value;
    var pass1 = document.forms['register']['password1'].value;
    var pass2 = document.forms['register']['password2'].value;
    var email = document.forms['register']['email'].value;

    var errorDiv = document.createElement("div");
    errorDiv.setAttribute("class", "allert alert-danger");
    errorDiv.setAttribute("id", "error");

    if(document.getElementById("error") !=null)
    {
        document.getElementById("error").remove();
    }
    console.log("before checking for equality");
    if(pass1 !==pass2)
    {
        console.log("checking passwords for equality");
        var text = document.createTextNode("PASSWORDS DONT MATCH!");
        errorDiv.appendChild(text);

        document.getElementById("password1").appendChild(errorDiv);
        return false;
    }
    console.log("after password check function");
}