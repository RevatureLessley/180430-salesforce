
//This function should maybe be split over two functions
function mtDetails(mtid){
    
    //I definitely think that this backtick notation is easiest to read, but is it a good practice?
    document.getElementById('mtsum').innerHTML = "";
    document.getElementById('mtimg').innerHTML = "";
    switch(mtid){
        case "lafayette":

            document.getElementById("mtsum").innerHTML = `
            <h3>Mt. Lafayette New Hampshire</h3>
            <hr>
            <p>Situated in the Franconia Notch, Mt. Lafayette at 5,249 feet is the fourth largest peak in New England.</p>
            <p>Because of it's lack of many immediate geological neighbors, the views at it's peak are stunning.  </p>

            `;
            document.getElementById("mtimg").innerHTML = `
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                    </ol>

                    <!-- Wrapper for slides -->
                    <div class="carousel-inner">
                        <div class="item active">
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
            document.getElementById("mtsum").innerHTML = `
            
            <h3>Bear Mountain Connecticut</h3>
            <hr>
            <p>At roughly 2,300 feet, Bear Mountain is the largest Mountain in Connecticut.  It is located in the northwest corner of the state. In spring it is known for for it's numerous wild blueberry bushes and large mountain laurel blooms.</p>
            
            
            `;
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
                            <img src="media/bear1.jpg">
                        </div>

                        <div class="item">
                            <img src="media/bear2.jpg">
                        </div>

                        <div class="item">
                            <img src="media/bear3.jpg">
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