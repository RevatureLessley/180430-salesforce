function retrieve(){
    document.getElementById("pokediv").innerHTML = "";
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
    var url = ("https://pokeapi.co/api/v2/pokemon/" + pkid + "/"); 
    console.log("XHR created, state: " + xhr.readyState);

    xhr.open("GET", url);//STATE 1
    
    xhr.onreadystatechange = function(){
        console.log("XREADY STATE IS NOW: " + xhr.readyState);
        if (xhr.readyState==4 && xhr.status==200){
            //run this code only if we know the request is finished and it was successful
            // Status 200 = OK
            var response = JSON.parse(xhr.response);
            
            let pkid  = document.createTextNode(response.id);
            let pkname = document.createTextNode(response.name);
            let types = response.types;
            let type1,type2;
            if (types.length>1){
                type1 = types[0].type.name;
                type2 = types[1].type.name;
            }
            else{
                type1 = types[0].type.name;
            }
            let type = type1;
            if (type2){
                type+= ", " + type2;
            };
            type = document.createTextNode(type);

            let pksprite = response.sprites.front_default;

            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            let td4 = document.createElement('td');
            
            let th1 = document.createElement('th');
            let th2 = document.createElement('th');
            let th3 = document.createElement('th');
            let th4 = document.createElement('th');
            let th1t = document.createTextNode("ID");
            let th2t = document.createTextNode("NAME");
            let th3t = document.createTextNode("TYPE");
            let th4t = document.createTextNode("SPRITE");

            let img = document.createElement('img');
            img.setAttribute("src",pksprite);

            let tr1 = document.createElement('tr');
            let tr2 = document.createElement('tr');
            let tr3 = document.createElement('tr');
            let tr4 = document.createElement('tr');
            let table = document.createElement('table');
            table.setAttribute("border","2px");

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

        }//if
        else if (xhr.readyState==4 && xhr.status!=200){
            document.getElementById("pokediv").innerHTML = 
            '<div class = "alert alert-danger">' + 
            'No Such Pokemon' + 
            '</div>'
        }//elseif
    }//function
    
    xhr.send(); //State2
}//retrieve