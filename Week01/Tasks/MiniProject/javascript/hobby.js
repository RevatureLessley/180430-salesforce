var intvl;

// animation speeds in changes-per-second.
const FPS1 = 1000;
const FPS2 = (1000 / 2);
const FPS4 = (1000 / 4);
const FPS20 = (1000 / 20);
const FPS24 = (1000 / 24);
const FPS30 = (1000 / 30);
const FPS60 = (1000 / 60);
const FPS120 = (1000 / 120);

$(document).ready(function () {

    // animated color change only when the mouse if over the well.
    $("#please").mouseover(ani);
    $("#please").mouseout(stp);

    //surprise image change when you mouse over this well. changes back once you mouse out
    $("#i1").mouseover(function () {
        $(this).attr("src", "CSS/Assets/Shrek Roar.png");
    });
    $("#i1").mouseout(function () {
        $(this).attr("src", "CSS/Assets/n64.jpg");
    });

    $("#i2").mouseover(function () {
        $(this).attr("src", "CSS/Assets/Shrek Smile.png");
    });
    $("#i2").mouseout(function () {
        $(this).attr("src", "CSS/Assets/Wheat Bread Man.png");
    });

    ani2();

});

var i = 0;
function changeColor() {
    var colors = ["firebrick", "darkorange", "darkgoldenrod", "chartreuse", "darkcyan", "darkmagenta"];
    $("#please").css("background-color", colors[i]);
    i = (i + 1) % colors.length;
};

var j = 0;
function showImg() {
    var images = ["CSS/Assets/LoL Logo.png", "CSS/Assets/Jack Frost.gif", "CSS/Assets/Clicker Heroes.gif"];
    var paste = "<img src='";
    paste += images[j];
    paste += "'>";
    $("#gaming").html(paste);
    j = (j + 1) % images.length;
}

function ani() {
    intvl = setInterval(function () { changeColor(); }, FPS4);
}

function ani2(){
    setInterval(function(){showImg();},FPS1);
}

function stp() {
    clearInterval(intvl);
}