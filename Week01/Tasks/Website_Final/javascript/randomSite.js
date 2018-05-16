/* This script is used to select a random website from
    a list for the user to end up at */

function getSite() {

    var site = Math.floor(Math.random() * 8) // number from 0 to 10
    //document.getElementById("rndBtn").innerHTML = site;

    switch (site) {
        case 0:
            window.open("https://rain.simplynoise.com/");
            break;
        case 1:
            window.open("http://theberrics.com/");
            break;
        case 2:
            window.open("https://tabs.ultimate-guitar.com/tab/rick_astley/never_gonna_give_you_up_chords_521741");
            break;
        case 3:
            window.open("http://img0.liveinternet.ru/images/attach/c/5/3970/3970473_sprite198.swf");
            break;
        case 4:
            window.open("https://www.youtube.com/watch?v=ab47XHidvwQ");
            break;
        case 5:
            window.open(" http://beginnerflyer.com/build-a-drone/");
        default:
            window.open("https://www.salesforce.com/");
            break;

    }

}
