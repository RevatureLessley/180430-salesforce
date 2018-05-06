/* purpose of any fucntion referenced by onsubmit is that the funciton must return true in order for the submission to go through */

function validRegistration(){
	var username=document.forms['register']['username'].value;
	var pass1=document.forms['register']['password1'].value;
	var pass2=document.forms['register']['password2'].value;
	
	var errorDiv=document.createElement("div");
	errorDiv.setAttribute("class","alert alert-danger");
	errorDiv.setAttribute("class","error");
	
	if(docuemnt.getElementById("error")!=null){
		document.getElementById("error").remove();
	}
	if(pass!=pass2){
		var text = document.createTextNode("PASSWORDS DON'T MATCH!");
        errorDiv.appendChild(text);

        document.getElementById("password1").appendChild(errorDiv);
        return false;
	}
	return "what";
}