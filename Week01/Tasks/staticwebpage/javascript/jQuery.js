/**
 * jQuery
 * - lightweight javascript library that wraps around javascript its self
 * "write less, do more"
 * contains features for dom, css, affects, and animation, AJAX and other utilities
 * 
 * jQuery can be used, by either downloading files directlym or importing them via the content Delivery Nectwork
 * 
 * JQuery accomplishes its abstraction via closures
 * 
 * Basic jQuery syntax looks like this:
 * $(selector).action;
 */

 $(document).ready(function(){
    //stuff i want to do..
    $(generate).click(generate);
 });

function ht()
{
     $("#div1").hide(5000);
 }
function st(){
    $("#div1").show(2500);
}
$(function){
    $("#hover").hover(changeToRed);
}


function changeToRed(){
    $(this).css("color", "#FF0000");

}
function changeToBlack(){
    $(this).css("color", "black");
    
}
function generate(){
    var text = "<p> text 1</p>";
    var text3 = $("<p></p>").text("text");

    $("div1").append(text);
}


