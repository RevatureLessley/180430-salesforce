function retrieve(){
    /* xmlhttprequest object is the object we use in ajax in order to communicate with server api 
    endpoints in order to send a request, and get a repond  with the data we want

    xmlhttprequest objects have five state it can be in

    0- request is not configured yet
        - we just created pue xmlhttprequest object
    1- request has been properly configures
    2-the request has been sent to the server
    3-request is received and being processed
    4- request has been sent, and a proper respond has been received.
    */
    var pkid = document.getElementById("pkmid").value;

    var xhr =new XMLHttpRequest();
    console.log("XHR created,state: " + xhr.readyState);
    var url = ("http://pokeapi.co/api/v2/pokemon/" + pkid + "/" );
    xhr.open("GET","url");

    xhr.onreadystatechange = function(){
        console.log("READY STATE IS NOW" + xhr.readyState);
        if(xhr.readyState == 4 && xhr.status == 200){
            //run this code if only guranteed the request is finished 
            //and it was succesful. status 200 = ok


        }else if (xhr.readyState == 4 && xhr.status != 200){
            console.log("ERROR" + xhr.status);
        }
    }
    xhr.send()
}