var commentCounter = 1;

function submitComment(e) {
    let commentEl = document.getElementById("commentInput");
    let counterEl = document.getElementById("comment_counter");
    let comment = commentEl.value;

    commentEl.value = ""

    let elementID = "tab" + Math.floor(Math.random() * 9);

    let tableBox = document.getElementById(elementID);

    if (comment) {
        tableBox.innerHTML = `<p class="dav-speech-bubble">${comment}</p>`;
        counterEl.innerHTML = '' + commentCounter + ' comments posted - and counting!';
        commentCounter++;
    }

    e.preventDefault();
}