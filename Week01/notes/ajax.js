function retrieve() {
  var pkid = document.getElementById("pkmnid").value;
  document.getElementById("poketable").innerHTML = "";

  // XMLHttpRequest object is the object we use in AJAX in order to
  // communicate with serve API endpoints in frder to send a request,
  // and get a response with the data wer wanted.
  //
  // XMLHttpRequest objects have five states it can be in.
  // these starte are numbered from 0-4
  // 0 - request is not configured yet.
  //   - we just created out XMLHttpRequest objects
  // 1 - Request has been properly configured
  //   - we have called the .open() jmethod on our object
  // 3 - request is received and being processed
  //   - communication with the serve has been established.
  //   - yet we have not recieved a response yet
  // 4 - request hass been sent and a proper resopnse has been received.
  //   - request/response lifecycle is complete.


  var xhttp = new XMLHttpRequest();
  console.log("state: " + xhttp.readyState)
  var url = "https://pokeapi.co/api/v2/pokemon/" + pkid +"/";
  xhttp.open("GET", url);
  xhttp.onreadystatechange = function() {
    console.log("ready state is now: " + xhttp.readyState);
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var pokemonjson = JSON.parse(xhttp.response);

      let pkid = document.createTextNode(pokemonjson.id);
      let pkname = document.createTextNode(pokemonjson.name);
      let pksprite = pokemonjson.sprites.front_default;
      if(pokemonjson.types.length == 1) {
          var type = document.createTextNode(pokemonjson.types[0].type.name);
      } else {
        let temptype = pokemonjson.types[0].name;
        temptype += ", " + pokemonjson.types[1].type.name;
        var type = document.createTextNode(temptype);
      }
      // let type = type1;
      // if (type2) {
      //   type += ", " + type2;
      // }

      let td1 = document.createElement('td');
      let td2 = document.createElement('td');
      let td3 = document.createElement('td');
      let td4 = document.createElement('td');
      let td5 = document.createElement('td');
      let th1 = document.createElement('th');
      let th2 = document.createElement('th');
      let th3 = document.createElement('th');
      let th4 = document.createElement('th');
      let th1t = document.createTextNode('ID');
      let th2t = document.createTextNode('NAME');
      let th3t = document.createTextNode('TYPE');
      let th4t = document.createTextNode('SPRITE');
      let tr1 = document.createElement('tr');
      let tr2 = document.createElement('tr');
      let tr3 = document.createElement('tr');
      let tr4 = document.createElement('tr');

      let img = document.createElement('img');
      img.setAttribute("src", pksprite);

      let tr = document.createElement('tr');
      let table = document.createElement('table');

      table.setAttribute("style","border: 2px;");

      td1.appendChild(pkid);
      td2.appendChild(pkname);
      td3.appendChild(type);
      td4.appendChild(img);
      th1.appendChild(th1t);
      th2.appendChild(th1t);
      th3.appendChild(th3t);
      th4.appendChild(th2t);

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

      document.getElementById("poketable").appendChild(table);

      console.log(pokemonjson);
      //Run this code only if we gauruntee the reqiuest is finished,
      //And it was sucessful Status 200 = ok
    } else if( xhttp.readyState == 4 && xhttp.status != 200 ){
      console.log("error");
    }
  }
  xhttp.send();
}
