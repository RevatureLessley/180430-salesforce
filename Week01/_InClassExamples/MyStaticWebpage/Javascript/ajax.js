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


                let response = JSON.parse(xhr.response);

                let pkid = document.createTextNode( response.id);
                let pkname = document.createTextNode( response.name );

                let type1 = response.types[0].type.name;
                let type2 = response.types[1].type.name;

                let typeStr = ( type2 )? "" + type1 + " " + type2 : "" + type1;
                
                let type = document.createTextNode( typeStr );

                let sprite = response.sprite.front_default;

                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                let td3 = document.createElement('td');
                let td4 = document.createElement('td');
                let td5 = document.createElement('td');

                let img = document.createElement('img');

                img.setAttribute("src", sprite);

                let tr = document.createElement('tr');
                let table = document.createElement('table');
                table.setAttribute("border", "2px");

                td1.appendChild(pkid);
                td2.appendChild(pkname);
                td3.appendChild(type);
                td4.appendChild(img);


                let th1 = document.createElement('th');
                let th2 = document.createElement('th');
                let th3 = document.createElement('th');
                let th4 = document.createElement('th');

                let th1t = document.createTextNode("ID");
                let th2t = document.createTextNode("NAME");
                let th3t = document.createTextNode("TYPE");
                let th4t = document.createTextNode("SPRITE");


                let tr1 = document.createElement('tr');
                let tr2 = document.createElement('tr');
                let tr3 = document.createElement('tr');
                let tr4 = document.createElement('tr');

                tr.appendChild( td );
                tr.appendChild( td );
                tr.appendChild( td );
                tr.appendChild( td );

                th1.appendChild(th1t);
                th1.appendChild(th2t);
                th1.appendChild(th3t);
                th1.appendChild(th4t);

                table.appendChild(tr);

            }
            else {
                console.log("ERROR");
            }
        }
    }

    xhr.send();

}