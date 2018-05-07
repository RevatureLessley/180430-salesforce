/* 

    The purpose of any function referenced by 'onsubmit'
 
 */



 function validateRegistration(){
     var username = document.forms['register']['username'].value
     var password = document.forms[register][password].value
     var password1 = document.forms[register][password1].value
     var email = document.forms[register][email].value

     var errorDiv = document.createElement("div");
     errorDiv.setAttribute("class","alert-danger");
     errorDiv.setAttribute("id","error");

     if(document.getElementById("error") != null){
         document.getElementById("error").remove();
     }

     if(pass1!=pass2){
         var text = document.createAttribute
     }
 }