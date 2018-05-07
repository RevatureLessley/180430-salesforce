function myTable() {
    //Javascript function to run and make a table and hide the list system while deleting the table every time the link is clicked. 
    var list = document.getElementById("hobbyList");
   // list.parentNode.removeChild(list);
    if (list.style.display === "none") {
        list.style.display = "block";
        var delTable = document.getElementById("myTable");
        delTable.parentNode.removeChild(delTable);

    } else {
        list.style.display = "none";
        var xTable = document.createElement("TABLE");
        xTable.setAttribute("id", "myTable");
        document.body.appendChild(xTable);

        var tRow = document.createElement("TR");
        tRow.setAttribute("id", "myTr");
        document.getElementById("myTable").appendChild(tRow);
        var hob2 = document.createElement("TR");
        hob2.setAttribute("id", "myTr2");
        document.getElementById("myTable").appendChild(hob2);
        var hob3 = document.createElement("TR");
        hob3.setAttribute("id", "myTr3");
        document.getElementById("myTable").appendChild(hob3);

        var hobtd1 = document.createElement("TD");
        var hobtd2 = document.createElement("TD");
        var hobtd3 = document.createElement("TD");
        var hobb1 = document.createTextNode("1. Computer Hardware");
        var hobb2 = document.createTextNode("2. Chess");
        var hobb3 = document.createTextNode("3. Piano");
        var img1 = document.createElement("TD");
        var img2 = document.createElement("TD");
        var img3 = document.createElement("TD");
        var imgHardware = document.getElementById("comHardware");
        var imgChess = document.getElementById("chess");
        var imgPiano = document.getElementById("piano");
        hobtd1.appendChild(hobb1);
        document.getElementById("myTr").appendChild(hobtd1);
        hobtd2.appendChild(hobb2);
        document.getElementById("myTr2").appendChild(hobtd2);
        hobtd3.appendChild(hobb3);
        document.getElementById("myTr3").appendChild(hobtd3);
        img1.appendChild(imgHardware);
        document.getElementById("myTr").appendChild(img1);
        img2.appendChild(imgChess);
        document.getElementById("myTr2").appendChild(img2);
        img3.appendChild(imgPiano);
        document.getElementById("myTr3").appendChild(img3);
        var divTable = document.getElementById("hobbyDiv");
        divTable.appendChild(xTable);
    }
    
    

        

        


  

}