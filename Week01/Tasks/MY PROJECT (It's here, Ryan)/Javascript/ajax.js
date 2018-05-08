function retrieve() {
    /*
        XMLHttpRequest object is the object we use in AJAX in order to communicate 
        with server API endpoints in order to send a request, and get a response with 
        the data we wanted.

        XMLHttpRequest objects have FIVE states in can be in. These states are numbered
        from 0-4.
        0 - Request is not configured yet
            -We just created our XMLHttpRequest object
        1 - Request has been properly configured
            -We have called the .open() method on our object
        2 - The request has been sent to a server
            -We called the .send() method
        3 - Request is received and being processed
            -Communication with the server has been established, yet we have not 
             received a response yet.
        4 - Request has been sent and a proper response has been received.
            -Request/Response lifecycle is complete.
    */
    var pkid = document.getElementById("pkmnid").value;

    var xhr = new XMLHttpRequest(); //STATE 0
    var url = "https://pokeapi.co/api/v2/pokemon/" + pkid + "/";
    console.log("XHR created, state: " + xhr.readyState);

    xhr.open("GET", url); //STATE 1
    xhr.onreadystatechange = function(){
        console.log("READY STATE IS NOW " + xhr.readyState);
        if(xhr.readyState == 4 && xhr.status == 200){
            //Run this code only if we guarantee the request is finished AND it was successful.  Status 200 = OK.

        } else if (xhr.readyState == 4 && xhr.status != 200){
            console.log("Error! Status: " + xhr.status);
        }
    }

    xhr.send(); //STATE 2

}