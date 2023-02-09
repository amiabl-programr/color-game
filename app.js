// grab all html elements
var numGrids = 6;

// getPickedColor();

var headerBg = document.querySelector(".title");
var refreshGameBtn = document.querySelector(".refresh");
var easyBtn = document.querySelector(".easy");
var hardBtn = document.querySelector(".hard");
var colorHeading = document.querySelector("h1");
var grids = document.querySelectorAll(".grids");
var i;
var rgb;
console.log(grids);
// ------functions------
// Generate random numbers
getRandomColors();
getPickedColor();
generateRandomGridColors();

function getRandomColors() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  rgb = `${r}, ${g}, ${b}`;

}
// set header background color
headerBg.style.backgroundColor = `rgb(${rgb})`;

// set h1 color
colorHeading.textContent = `RGB(${rgb})`

function reset() { }
function getPickedColor() {
  // loop through the grids and add a click listener

  for (i = 0; i < grids.length; i++) {
    // console.log(grids[i].style.backgroundColor)
    grids[i].addEventListener("click", function () {

      // this.style.backgroundColor = `rgb(${rgb})`
    }

    );

  }

}

function generateRandomGridColors() {
  for (i = 0; i < grids.length; i++) {
    let randomColors = Math.random(rgb);
    console.log(randomColors)
    grids[i].style.backgroundColor = `rgb(${randomColors})`
  }
}

// add event listener to buttons
// grids.addEventListener("click", getPickedColor)