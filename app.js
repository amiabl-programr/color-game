// grab all html elements
var numGrids = 6;

// getPickedColor();
var rgb;
var headerBg = document.querySelector(".title");
var refreshGameBtn = document.querySelector(".refresh");
var easyBtn = document.querySelector(".easy");
var hardBtn = document.querySelector(".hard");
var colorHeading = document.querySelector("h1");
var squares = document.querySelectorAll(".grids");
var i;
console.log(squares);
// ------functions------
// Generate random numbers
// getRandomColors();
getPickedColor();
generateRandomGridColors();

function getRandomColors() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  rgb = `${r}, ${g}, ${b}`;
  return rgb;
}

// set header background color
headerBg.style.backgroundColor = `rgb(${rgb})`;

// set h1 color
colorHeading.textContent = `RGB(${rgb})`

function reset() { }
function getPickedColor() {
  // loop through the squares and add a click listener

  // for (i = 0; i < squares.length; i++) {
  //   // console.log(squares[i].style.backgroundColor)
  //   squares[i].addEventListener("click", function () {

  //     // this.style.backgroundColor = `rgb(${rgb})`
  //   }

  //   );

  // }

}
// console.log(squares[0])
function generateRandomGridColors() {
  var randomSquare = Math.round(Math.random() * 6);
  console.log(randomSquare);
  for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = `rgb(${getRandomColors()})`;
  }

}

// add event listener to buttons
// grids.addEventListener("click", getPickedColor)