var elements = document.getElementsByClassName("column");
var i;
function listView() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "100%";
        elements[i].style.display = "flex";
        elements[i].style.gap = "2rem";
    }
}
function gridView() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "40%";
        elements[i].style.display = "block";
        elements[i].style.gap = "0";
    }
}

// display: flex;
// gap: 2rem;