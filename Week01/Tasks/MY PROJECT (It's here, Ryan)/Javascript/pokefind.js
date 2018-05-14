function addpoke() {
    document.getElementById("inv-poke-p").innerHTML = "";
    var pokeName = document.getElementById("poke-to-add").value.toLowerCase();

    var xhr = new XMLHttpRequest();
    var url = "https://pokeapi.co/api/v2/pokemon/" + pokeName + "/";

    xhr.open("GET", url);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.response);
            let pokeID = document.createTextNode(response.id);
            let pokeNameUpper = capitalizeFirst(String(response.name));
            pokeName = document.createTextNode(pokeNameUpper);
            let type = document.createTextNode(response.types[0].type.name);
            let sprite = response.sprites.front_default;



            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");

            let td1t = pokeID;
            let td2t = pokeName;
            //3rd element is the sprite.
            let img = document.createElement("img");
            img.setAttribute("src", sprite);
            //4th element is remove button.
            let rmvBtn = document.createElement("button")
            rmvBtn.setAttribute("onclick", "removeRow(this)");

            let tr = document.createElement("tr");
            tr.setAttribute("class", response.types[0].type.name);

            rmvBtn.appendChild(document.createTextNode("X"));

            td1.appendChild(td1t);
            td2.appendChild(td2t);
            td3.appendChild(img);
            td4.appendChild(rmvBtn);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);

            document.getElementById("favpokes").appendChild(tr);
        } else if (xhr.readyState == 4 && xhr.status != 200) {
            document.getElementById("inv-poke-p").innerHTML = "Invalid Pokémon!";
        }
        console.log(xhr.readyState);
    }
    xhr.send();
}

function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function removeRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}