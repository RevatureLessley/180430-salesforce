function submitComment ()
{
    let commentEl = document.getElementById("commentInput");
    let comment = commentEl.value;

    if (comment == false) { return; }
    commentEl.value = ""

    let elementID = "tab" + Math.floor( Math.random() * 9);

    let tableBox = document.getElementById( elementID );

    tableBox.innerHTML = `
    <p>${comment}</p>
    `;
}