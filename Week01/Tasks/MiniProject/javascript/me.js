var i = 0; //this cannot be within the function or it will reset to 0 on each call. oops.
function changeColor() {
    var doc = document.getElementById("leave");
    var color = ["maroon", "chocolate", "goldenrod", "darkgreen", "navy", "purple"];
    doc.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
}