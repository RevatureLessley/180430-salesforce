//these variables hold video id's
var b1ID = "UZDuGjvXd1Q";
var b2ID = "du-TY1GUFGk";
var b3ID = "3NMhGCf20i0";
var b4ID = "-0sNvZVpTFw";
var b5ID = "iQC7NWoO538";
var b6ID = "3WAOxKOmR90";
var hidden = "9Deg7VrpHbM";

//url is the video url minus the video id.
var url = "https://www.youtube.com/embed/";

//nurl is a temporary, full video link. it is set in changeURL(), depending on what button is pressed.
var nurl = "";

//this function edits the text that is going to be put into the "src" attribute.
function changeURL(id) {
    // console.log("OG url: "+url);
    nurl = url + id + "?autoplay=1";
    // console.log("NEW url: "+nurl);
}

var blah;

var clickCounter = 0; //track how many times somebody's clicked the text

// this function handles onclick events for each button.
// when a button is clicked, the video in the iframe will change dynamically.
// NOTE: it wasn't working for quite some time because of syntax errors. (?)
//     $(document).ready( [...] ); is correct
//     what I had before was $(document.ready [...])
// NOTE NOTE: javascript just doesn't like it when .click() is taking a function that has parameters? I think that's the actual problem.
$(document).ready(function () {

    $("#b1").click(changeID);
    $("#b2").click(changeID);
    $("#b3").click(changeID);
    $("#b4").click(changeID);
    $("#b5").click(changeID);
    $("#b6").click(changeID);

    //silliness with the text above the buttons. if you click it too many times, it gets angry.
    $("#boop").click(function () {

        // remember to have the exit case first.
        if (clickCounter >= 12) {
            $("*").unbind("click"); //turn off all click events. user can still click the links on the page, just not the buttons or this text
            clearInterval(blah); //stop the animatinons
            $("body").css("background","url('CSS/Assets/y.jpg')"); //remember to double check filepaths!!! CSS/Assets/file.jpg
            $("body").css("background-size","contain"); //this is the  best fit. it gets the image into the smallest size possible for both width and height to fit within the screen
            $(".well").hide(); //hide everything
            $("#buttons").show(); //except the well with the buttons
            //trying to ensure that the text does change. if the user clicks fast enough, they can bypass this.
            setTimeout(function(){
                $("#boop").text("I'm Done");
            }, 1000);
            $("*").css("color", "maroon"); //change all text (except "Roses are")to crimson
            
            changeURL(hidden); //apply the hidden video id
            changeID(); //insert the video URL
            //let the video play, then refresh the page automatically
            setTimeout(function () {
                location.reload();
            }, 7500);
        }else if (clickCounter % 4 == 0 && clickCounter < 12) {
            $("#boop").text("Not Me!");
            clickCounter++; //increment the counter
            // reset the text
            setTimeout(function () {
                $("#boop").text("Click A Thing!");
            }, 1000);
        }else if (clickCounter % 4 == 1 && clickCounter < 12) {
            $("#boop").text("Stop It!");
            clickCounter++;
            setTimeout(function () {
                $("#boop").text("Click A Thing!");
            }, 1000);
        }else if (clickCounter % 4 == 2 && clickCounter < 12) {
            $("#boop").text("How Rude!");
            clickCounter++;
            setTimeout(function () {
                $("#boop").text("Click A Thing!");
            }, 1000);
        }else if (clickCounter % 4 == 3 && clickCounter < 12) {
            $("#boop").text("Come On!");
            clickCounter++;
            setTimeout(function () {
                $("#boop").text("Click A Thing!");
            }, 1000);
        }
        //lots of redundancy in this block. want to be sure that everything is tight here.

    });

    doStuff(); //animate those colors

});

// this function changes src attribute if the iframe that holds the video.
function changeID() {

    $("#vidya").attr("src", nurl);

};


var i = 0;

//this function changes the text color of the buttons
function change() {
    var colors = ["crimson", "salmon", "gold", "forestgreen", "navy", "violet"];
    $("#b1").css("color", colors[i]);
    $("#b2").css("color", colors[i + 1]);
    $("#b3").css("color", colors[i + 2]);
    $("#b4").css("color", colors[i + 3]);
    $("#b5").css("color", colors[i + 4]);
    $("#b6").css("color", colors[(i + 5) % colors.length]); //this is the only one that actually needs this extra math. it gets stuck on violet otherwise
    //the other workaround for this was simply to add another color, but I didn't want to do that. this took way more time than I'm willing to admit

    $("#boop").css("color", colors[i]);

    i = (i + 1) % colors.length;

};

//this function animates the colors at the given interval
function doStuff() {
    blah = setInterval(function () { change() }, 250);
};