function retrieve(){
    /*
    XMLHttpRequest object is the object we use in AJAX in order to communicate with server API enpoints
    in order quest, and get a response with the data we wanted
    */
   /* 
   
   */
    var pkid = document.getElementById("pkmnid").value;

    var xhr = new XMLHttpRequest();
    var url = ("https://pokeapi.co/api/v2/pokemon/" + pkid + "/")

    console.log("XHR created, state: " + xhr.readyState);
    xhr.open("GET", url);

    xhr.onreadystatechange = function(){
        console.log("READY STATE IS NOW: " + xhr.readyState);
        if(xhr.readyState == 4 && xhr.status == 200){
            //Run only if we garantee the request is finished,
            //AND it was successfull. status 200 = ok

        }else if(xhr.readyState == 4 && xhr.status != 200){
            console.log("ERROR: Status: " + xhr.status);
        }
    }

    xhr.send();

}