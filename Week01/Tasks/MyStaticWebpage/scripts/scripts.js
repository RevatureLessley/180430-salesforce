
//This function should maybe be split over two functions
function mtDetails(mtid){

    document.getElementById('mtsum').innerHTML = "";
    document.getElementById('mtimg').innerHTML = "";
    switch(mtid){
        case "lafayette":   
            document.getElementById("mtsum").innerHTML = "My. Lafayette";
            document.getElementById("mtimg").innerHTML = `
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <!-- Wrapper for slides -->
                    <div class="carousel-inner">
                        <div class="item active">
                            <img src="media/lafayette1.jpg">
                        </div>

                        <div class="item">
                            <img src="media/lafayette2.jpg">
                        </div>

                        <div class="item">
                            <img src="media/lafayette3.jpg">
                        </div>
                    </div>

                    <!-- Left and right controls -->
                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            `;
        break;
        case "bear":
            document.getElementById("mtsum").innerHTML = "Bear Mountain";
            document.getElementById("mtimg").innerHTML = `
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <!-- Wrapper for slides -->
                    <div class="carousel-inner">
                        <div class="item active">
                            <img src="media/lafayette1.jpg">
                        </div>

                        <div class="item">
                            <img src="media/lafayette2.jpg">
                        </div>

                        <div class="item">
                            <img src="media/lafayette3.jpg">
                        </div>
                    </div>

                    <!-- Left and right controls -->
                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            `;

        break;
        case "greylock":
            document.getElementById("mtsum").innerHTML = "Mt. Greylock";
            document.getElementById("mtimg").innerHTML = `
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <!-- Wrapper for slides -->
                    <div class="carousel-inner">
                        <div class="item active">
                            <img src="media/bear1.jpg" alt="Los Angeles">
                        </div>

                        <div class="item">
                            <img src="media/bear2.jpg" alt="Chicago">
                        </div>

                        <div class="item">
                            <img src="media/bear3.jpg" alt="New York">
                        </div>
                    </div>

                    <!-- Left and right controls -->
                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            `;
        break;
    }
}