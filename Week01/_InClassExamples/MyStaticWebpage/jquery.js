// Jquery
// - light weight jacascript livrary that wraps around javascript itself.
// - write less do more
// - can be used to simplify ajax calls as well
// - the library contains features for html dom maniupulation
//   - css manipulation effects and animation ajax and other unilities
// - jquery can be used be either downling files directly or importing them via
// the content deliver network
// - jquery accomplishes its abstraction via closures
// - basic jquery syntax looks like this:
// $(selector).action;
// node the $ character is a shortcut for jquery(selecter).action;

//jquery cersion of window.onload()
// $(document.ready(function() {
    //stuff here
// }))

//a shorter version of this is
$(function() {

});

function hide() {
  $("#div1").hide(1000);
}

function show() {
  $("#div1").show(1000);
}

$(function(){
  //change to red on mouse over change to black on mouse out
  $("#hover").hover(changeToRed, changeToBlack);
  $("#fading").click(genericFadeout)
  $("#generate").click(generate)
});

function changeToRed(){
  $(this).css("color", "#FF0000");
}

function changeToBlack() {
  $(this).css("color", "#000000");
}

function genericFadeout(){
  $("*").fadeTo(2500,0).fadeTo(2500,1);
}

function generate() {
  var text1 = "<p>text1</p>";
  var text2 = document.createElement("p");
  text2.innerHTML = "text2";

  var text3 = $('<p></p>').text("text3");
  $("#div1").append(text1,text2,text3);
}
