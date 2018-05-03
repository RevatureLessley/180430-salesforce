function retrieve() {

    document.getElementById("pokediv").innerHTML = "";

    var pkID = document.getElementById("pkmnID").value;

    /*
        XMLHttpRequest object is the object we use in AJAX in order to communicate
        with server API endpoints in order to send a request and get a response with
        the data we want

        XMLHttpRequest objects have 5 states, numbered 0-4.
        0 - Request is not configured. 
            - XMLHttpRequest object has just been created.
        1 - Request has been properly configured. 
            - we called the .open() method.
        2 - Request has been sent to a server. 
            - we called the .send() method.
        3 - Request has been received and is being processed
            - communication with the server has been established, but there is no response
        4 - Request has been sent and we have received a response.
            - request/response lifecycle has completed
    */
    var xhr = new XMLHttpRequest(); //state 0
    var url = "https://pokeapi.co/api/v2/pokemon/" + pkID + "/"; //this will append the pokemon id to the URL
    console.log("XHR created, state: " + xhr.readyState); //this will simply show us in what state xhr is
    xhr.open("GET", url); //state 1

    xhr.onreadystatechange = function () {
        console.log("READY STATE IS NOW: " + xhr.readyState);
        //status: 5XX means server error, 4XX means client error, 200 mean OK
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("pokediv").innerHTML="";
            //run this code only if we guarantee the request is finish and successful.

            //parse the api's feedback
            var response = JSON.parse(xhr.response);

            //get attributes from the response of the api
            let pkid = document.createTextNode(response.id);
            let pkname = document.createTextNode(response.name);
            let types = response.types;
            let type1, type2;
            if (types.length > 1) {
                type1 = types[0].type.name;
                type2 = types[1].type.name;
            } else {
                type1 = types[0].type.name;
            }

            let pksprite = (response.sprites.front_default);

            //now create a table via javascript
            //first set up all the necessary pieces

            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");

            let th1 = document.createElement("th");
            let th2 = document.createElement("th");
            let th3 = document.createElement("th");
            let th4 = document.createElement("th");

            let th1t = document.createTextNode("ID");
            let th2t = document.createTextNode("Name");
            let th3t = document.createTextNode("Type");
            let th4t = document.createTextNode("Sprite");

            //if a pokemon has more than one type, type2 will be appended to type
            let type = type1;
            if (type2) {
                type += ", " + type2;
            }

            type = document.createTextNode(type); //we previously used createTextNode for both types above.

            let img = document.createElement("img");
            img.setAttribute("src", pksprite);

            let tr1 = document.createElement("tr");
            let tr2 = document.createElement("tr");
            let tr3 = document.createElement("tr");
            let tr4 = document.createElement("tr");
            let table = document.createElement("table");
            table.setAttribute("border", "2px");

            //and then construct the table

            td1.appendChild(pkid);
            td2.appendChild(pkname);
            td3.appendChild(type);
            td4.appendChild(img);

            th1.appendChild(th1t);
            th2.appendChild(th2t);
            th3.appendChild(th3t);
            th4.appendChild(th4t);

            tr1.appendChild(th1);
            tr1.appendChild(td1);

            tr2.appendChild(th2);
            tr2.appendChild(td2);

            tr3.appendChild(th3);
            tr3.appendChild(td3);

            tr4.appendChild(th4);
            tr4.appendChild(td4);

            table.appendChild(tr1);
            table.appendChild(tr2);
            table.appendChild(tr3);
            table.appendChild(tr4);

            document.getElementById("pokediv").appendChild(table);


        } else if (xhr.readyState == 4 && xhr.status != 200) { //remember: without the first statement, if readyState is anything other than 4, an error will be sent.
            document.getElementById("pokediv").innerHTML = '<div class="alert alert-primary" role="alert">' + 'No such Pokeman!' + '</div>';
        }
    };

    xhr.send(); //state 2
}