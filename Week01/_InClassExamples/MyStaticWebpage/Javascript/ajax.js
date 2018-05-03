function retrieve() {
    /*
        XMLHttpRequest object is the object we use in AJAX in order
        to communicate with serer API endpoints in order to send
        a request,  and get a response

        XMLHttpRequest Objects have FIVE states they can be in.
        These states are numbered from 0-4.

        0 - request is not configured yet - we just created our xhr obj
        1 - request has been properly configured - we have called the .open() method on our obj
        2 - request has been sent to a server - we called the .send() method
        3 - Request is received and being processed
            Communication with server established yet no response received
        4 - request has been send and a proper response has been received.
            request/response lifecycle is complete.
     */

    console.log("Attempting retrieve!");

    var pkid = document.getElementById("pkmnid").value;

    var xhr = new XMLHttpRequest();
    var url = ("https://pokeapi.co/api/v2/pokemon/" + pkid + "/");

    xhr.open("GET", url); // STATE 1

    xhr.onreadystatechange = function () {
        console.log("Ready state is now: " + xhr.readyState);

        if (xhr.readyState == 4) {

            if (xhr.status == 200) {
                // run this code only if we guarantee the request is finished
                // and it was successful. status 200 = OK

            }
            else {
                console.log("ERROR");
            }
        }
    }

    xhr.send();

}