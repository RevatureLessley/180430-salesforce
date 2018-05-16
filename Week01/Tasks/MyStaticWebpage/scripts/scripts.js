
//Dynamically generate carousel
function mtDetails(mtid){

    document.getElementById('mtsum').innerHTML = "";
    document.getElementById('mtimg').innerHTML = "";
    switch(mtid){
        case "lafayette":

            document.getElementById("mtsum").innerHTML = `
            <h3>Mt. Lafayette, New Hampshire</h3>
            <hr>
            <p>Situated in the Franconia Notch, Mt. Lafayette at 5,249 feet is the fourth largest peak in New England.</p>
            <p>Because of it's lack of many immediate geological neighbors, the views at it's peak are stunning.</p>
            <p>My hike there began at the base of Mt. Lafayette's immediate neighbor, the Little Haystack.  Weaving back and forth over Dry Brook a number of times, the trail eventually reaches the summit of the Little Haystack.  From there, it's a ridgeline hike across the summit of Mt. Lincoln up to the peak of Mt. Lafayette.  Followed by a gradual descent back to it's base.

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
            
            <h3>Bear Mountain, Connecticut</h3>
            <hr>
            <p>At roughly 2,300 feet, Bear Mountain is the largest Mountain in Connecticut.  It is located in the northwest corner of the state. In spring it is known for for it's numerous wild blueberry bushes and large mountain laurel blooms.</p>
            <p>The trail I hiked runs along along the Appalachian Trail for four miles, beginning at a lookout point called the Lion's Head and ending at the summit of Bear Mountain. The trail crosses a number of streams and campsites set aside for Appalachian through hikers.
            
            
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



function displayConcertVideo(vidID){
    document.getElementById('video-wrapper').innerHTML="";

    switch (vidID){
        //Mahler
        case "mahler1":
        document.getElementById('video-wrapper').innerHTML=`
        <iframe class="concert-video" src="https://www.youtube.com/embed/UjmthMDpyco" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        break;
        case "mahler2":
        document.getElementById('video-wrapper').innerHTML=`
        <iframe class="concert-video" src="https://www.youtube.com/embed/wWxX-kf-2MI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        break;
        case "mahler3":
        document.getElementById('video-wrapper').innerHTML=`
        <iframe class="concert-video" src="https://www.youtube.com/embed/InHMgvLozrE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        break;
        //Sibelius
        case "sib1":
        document.getElementById('video-wrapper').innerHTML=`
        <iframe class="concert-video" src="https://www.youtube.com/embed/SAOf46CXaaw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        break;
        case "sib2":
        document.getElementById('video-wrapper').innerHTML=`
        <iframe class="concert-video" src="https://www.youtube.com/embed/XHHfvdAqvn8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        break;
        case "sib3":
        document.getElementById('video-wrapper').innerHTML=`
        <iframe class="concert-video" src="https://www.youtube.com/embed/F5zg_af9b8c" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        break;
        //Aaron Copland
        case "copland1":
        document.getElementById('video-wrapper').innerHTML=`
        <iframe class="concert-video" src="https://www.youtube.com/embed/8e3rVcSy3IQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        break;
        case "copland2":
        document.getElementById('video-wrapper').innerHTML=`
        <iframe class="concert-video" src="https://www.youtube.com/embed/s_MxTZlYL14" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        break;
        case "copland3":
        document.getElementById('video-wrapper').innerHTML=`
        <iframe class="concert-video" src="https://www.youtube.com/embed/9GnJBLwOjFo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        break;
    }
    


}


