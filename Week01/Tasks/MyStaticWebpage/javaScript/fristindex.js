function names(){
    $("#w3").hide();
    $("#w4").hide();
    var name = document.getElementById("name").value;
    document.getElementById("p").innerHTML ="Hello " + name + ",";
    $("#w1").show();
    $("#w2").show();

}

$(function() {
    $("#w1").hide();
    $("#w2").hide();
});