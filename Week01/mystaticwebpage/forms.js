//
// The purpose of any fucntion referenced by 'onsubmit' is that the function
// must return TRUE in order for the submissinos to go through

function validateRegistration() {
  var username = document.forms['register']['username'].value;
  var pass1 = document.forms['register']['password1'];
  var pass2 = document.forms['register']['password2'];

  var errorDiv = document.createElement("div");
  errorDiv.setAttribute("class", "alert alert-danger");
  errorDiv.setAttribute("id", "error");

  if(document.getElementById("error")!=null) {
    document.getElementById("error").remove();
  }

  if(pass1!=pass2) {
    var text = document.createTextNode("PASSWORDS DON'T MATCH");
    errorDiv.appendChild(text);
    document.getElementById("password1").appendChild(errorDiv);

    return false;
  }

}
