/* ==========================================================================
   main.js
   ========================================================================== */

function eraseText() {
    document.getElementById("nmbr_bubble").value = "";
}

var fruits = [""];
document.getElementById("nmbr_bubble").value = "";

function addNumber() {
    fruits.push("1");
    document.getElementById("nmbr_bubble").value = fruits;
}

function addNumber2() {
    fruits.push("2");
    document.getElementById("nmbr_bubble").value = fruits;
}

function addNumber3() {
    fruits.push("3");
    document.getElementById("nmbr_bubble").value = fruits;
}
