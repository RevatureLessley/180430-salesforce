function mtDetails(mtid){


    switch(mtid){
        case "lafayette":   
            document.getElementById("mtsum").innerHTML = "My. Lafayette";         
        break;
        case "bear":
            document.getElementById("mtsum").innerHTML = "Bear Mountain";
        break;
        case "greylock":
            document.getElementById("mtsum").innerHTML = "Mt. Greylock";
        break;
    }
}