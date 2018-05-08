function retrieve(){
    /*XMLHttpRequest Object is the object we use in
    AJAX in order to communicate with server API endpoints in order to send a request, 
    and get a response with the data we needed
    
    XHTMLHttpRequest Objects have FIVE states it can be in from 0-4

    0 - Request is not configured yet.
        - we just created out request object
    1 - request has been properly configured with .open methods

    2 - request has been sent to a server with .send method
    
    3 - request is received and being processed

    4 - request has been sent ans a proper response has been recived.
    
    
    */
    var pkid = document.getElementById("pkmnid").value;

    var xhr = new XMLHttpRequest(); //state 0
    var url = ("https://pokeapi.co/api/v2/pokemon/" + pkid + "/");
    console.log("XHR Created, state: " + xhr.readyState);
    xhr.open("GET", url); //state 1

    xhr.onreadystatechange = function(){
        console.log();
        if(xhr.readyState == 4 && xhr.status == 200){
            //run this code if we can guarantee the request is finished 
            //and the response status was 200 = ok
         var response = JSON.parse(xhr.response);
        let pkid = document.createTextNode(response.id);
        let pkname = document.createTextNode(response.name);
        let type1 = response.types[0].type.name;
        let type2 = response.types[1].type.name;
        let type = type1;

        if(type2)
        {
            type += "," + type2;
        }
        type = document.createTextNode(type);
        let pksprite = response.sprites.front_default;
        
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
       // let td5 = document.createElement("td");

        let th1 = document.createElement('th');
        let th2 = document.createElement('th');
        let th3 = document.createElement('th');
        let th4 = document.createElement('th');
        
        let th1t = document.createTextNode('ID');
        let th2t = document.createTextNode('NAME');
        let th3t = document.createTextNode('TYPE');
        let th4t = document.createTextNode('SPRITE');

        let img = document.createElement('img');
        img.setAttribute("src", pksprite);
        let tr = document.createElement('tr');
        let table = document.createElement('table');
        table.setAttribute("border", "2px");

        td1.appendChild(pkid);
        td2.appendChild(pkname);
        td3.appendChild(type);
        td4.appendChild(img);
        
        th.appendChild();
        th.appendChild();
        th.appendChild();
        th.appendChild();
        th.appendChild();
        


        table.appendChild(tr);


        }else if(xhr.readyState == 4 && xhr.status !=200){
            console.log("ERROR: status: "+ xhr.status);
        }

    }

    xhr.send();
}