
function changeFont()
{
   // var a = document.getElementById("introSection");
  //  a.style.fontSize = "25px";
}

$("#changeFont").hover(function () {
    $(this).css("background-color", "red");
})

 $(function(){

    $("#hobbiesDesc").hover(changeToBlue);
    $("#hobbiesDesc").mouseleave(changeToBlack);
  
}); 


function changeToBlue(){
   
    $(this).css("color","#0080ff");
    $(this).css("font-size","20px");
}
function changeToBlack(){
    
    $(this).css("color","black");
    $(this).css("font-size","16px");
}