function retrieve () {
    var character = document.getElementById("characterP").innerHTML = "";

    var xhr = new XMLHttpRequest();
    var url = "https://api.xivdb.com/character/9334957";

    xhr.open("GET", url);
    xhr.send();

    console.log("sending" + xhr.readyState);

    xhr.onreadystatechange = function () {
        console.log("blah?" + xhr.readyState);

        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.response);

            let portrait = response.portrait;
            
            var img = document.createElement("img");
            img.setAttribute("src", portrait);

            console.log(portrait);

            document.getElementById("characterP").appendChild(img);

        } else if (xhr.readyState == 4 && xhr.status != 200){
            console.log("Uh oh.");
        }
    }
}