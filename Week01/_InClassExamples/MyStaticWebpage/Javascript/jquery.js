/*

    jQuery is a lightweight javascript library that wraps around javascript itself.
    can be used to simplify AJAX calls as well.
    The libary contains features for
        - HTML/DOM mainipulation
        - css manipulation, effenct and animation, ajax and other utilities.
        -jquery can be used by downloading the files directly or importing them directly via a CDN
        - jquery accomplishes its abscraction via closures

    jQuery syntax looks like this:
    $(selector).action;
    (note $ character is a shortcut for: jQuery(selector).action;)

 */

 //jQuery version of window.onload(){}
 $(document).ready( function ()
{
    // stuff I cant to do...
});

// a shorter version of this is:
$(function()
{

});

function hideit()
{
    $("#div1").hide();
}

function showit()
{
    $("#div1").show();
}

$(function ()
{
    $("#hover").hover( changeToRed, changeToBlack);
    $("#fading").click(genericFadout);
    $("#generate").click(generate);
})


function changeToRed(){
    $(this).css( "color", "#ff0000");
}

function changeToBlack ()
{
    $(this).css("color", "#000000");
}

//In jQuery, you can do command chains.
function genericFadout ()
{
    $("*").fadeTo(2500, 0).fadeTo(2500, 1); // take 2.5 s to fade out
}

function generate ()
{
    var text1 = "<p>text1</p>";
    var text2 = document.createElement("p");
    text2.innerHTML ="text2";

    var text3 = $("<p></p>").text("text3");

    $("#div1").append( text1, text2, text3 );
}