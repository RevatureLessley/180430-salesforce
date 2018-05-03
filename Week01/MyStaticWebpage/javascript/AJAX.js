function retrieve(){

/* 
    XMLHttpRequest object is the object we use in AJAX in order
    to communicate with server API endpoints in order to send a request,
    and get a response with the data we wanted.

    XMLHttpRequest objects have 5 states it can be in.
    These states are numbered 0-4

    0 - Request is not configured yet
        We just created out XMLHttpRequest onject
    1 - Request has been properly configured
        We have called the .open method on our object
    2 - The request has been sent to the server
        We called the .send() method
    3 - Request is received and being processed
        Communication with server has been established
        We have yet to receive a response
    4 - Request has been sent, and a proper response has been received
        Request/response lifecycle is complete
*/    
    var pkid = document.getElementById("pkmnid").value;

    var xhr = new XMLHttpRequest();//STATE 0
    var url = ("https://pokeapi.co/api/v2/pokemon" + pkid + "/"); 
    console.log("XHR created, state: " + xhr.readyState);

    xhr.open("GET", url);//STATE 1
    
    xhr.onreadystatechange = function(){
        console.log("XREADY STATE IS NOW: " + xhr.readyState);
        if (xhr.readyState==4 && xhr.status==200){
            //run this code only if we know the request is finished and it was successful
            // Status 200 = OK

        }//if
        else if (xhr.readyState==4 && xhr.status!=200){
            console.log("Error: Status: " + xhr.status);
        }//elseif
    }//function
    
    xhr.send(); //State2
}//retrieve