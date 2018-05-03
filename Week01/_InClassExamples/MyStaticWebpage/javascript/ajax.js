function retrieve(){
<<<<<<< HEAD
    /*
    XMLHttpRequest object is the object we use in JAX in order to communicate with server API endpoints in order to send a request, and get a response
    with the data we wanted.

    XMLHttpRequest objects have Five states it can be in.
    These states are numbered from 0-4.
    0- Request is not configured yet.
       -We just created our XMLHttpRequest object:
    1. - Request has been properly configured
       -We have called the .open() method on our object.
    2. The request has been sent to a server
      - We called the .send() method.
    3.-Request is recieved and being processed.
      -Communication with the server has been established.
      -Yet we have not received a response yet.
    4.Request has been sent, and a proper response has been received.
     -request/response lifecycle is complete.

*/
    var pkid = document.getElementById("pkmnid").value;

    var xhr = new XMLHttpRequest(); //State 0
    var url = "https://pokeapi.co/api/v2/pokemon/" + pkid + "/";
    console.log("XHR created, state: " + xhr.readyState);
    xhr.onreadystatechange = function() {
        console.log("Ready State is now " + xhr.readyState);
        if (xhr.onreadystate == 4 && xhr.status == 200)
        {
            //Run this code only if we guranatee the request is finished.
            //AND it was sucessful. Status 200 = OK
        }
        else if(xhr.readyState==4 && xhr.status != 200){
            console.log("ERROR");
        }
    }
    xhr.open("GET", url); //State 1
    

    xhr.send(); //STATE 2


=======
    document.getElementById("pokediv").innerHTML=
        "<img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'>";
/*
    XMLHttpRequest object is the object we use in AJAX in order to 
    communicate with server API endpoints in order to send a request,
    and get a response with the data we wanted.

    XMLHttpRequest objects have FIVE states it can be in.
    These states are numbered from 0-4.
    0 - Request is not configured yet.
        -We just created our XMLHttpRequest object
    1 - Request has been properly configured
        -We have called the .open() method on our object.
    2 - The request has been sent to a server
        -We called the .send() method
    3 - Request is received and being processed
        -Communication with the server has been established.
        -Yet we have not recieved a response yet
    4 - Request has been sent, and a proper response has been received.
        -request/response lifecycle is complete.
*/

    var pkid = document.getElementById("pkmnid").value;
    var xhr = new XMLHttpRequest(); //STATE 0
    var url = ("https://pokeapi.co/api/v2/pokemon/" + pkid + "/");

    xhr.onreadystatechange = function(){
        console.log("READY STATE IS NOW: " + xhr.readyState);
        if(xhr.readyState == 4 && xhr.status == 200){
            document.getElementById("pokediv").innerHTML="";
            //Run this code only if we gaurantee the request is finished,
            //AND it was successful. Status 200 = OK
            var response = JSON.parse(xhr.response);

            let pkid = document.createTextNode(response.id);
            let pkname = document.createTextNode(response.name);
            let types = response.types;
            let type1,type2;

            if(types.length>1){
                type1 = types[0].type.name;
                type2 = types[1].type.name;
            }else{
                type1 = types[0].type.name;
            }

            let type = type1;
            if(type2){
                type += ", " + type2;
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
            table.setAttribute("border", "2px");

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
            

        }else if(xhr.readyState==4 && xhr.status!=200){
            document.getElementById("pokediv").innerHTML=
            '<div class="alert alert-danger">' +
            'NO SUCH POKEYMAN!' +
            '</div>';
        }
    }

    console.log("XHR created, state: " + xhr.readyState);
    xhr.open("GET", url); //STATE 1
    xhr.send(); //STATE 2
>>>>>>> e603dae6145497465b7f6f7b5dd5c49840d7e60b
}