// grab all html elements
var refreshGameBtn = document.querySelector(".refresh");
var easyBtn = document.querySelector(".easy");
var hardBtn = document.querySelector(".hard");
var colorHeading = document.querySelector("h1");
var grids = document.querySelectorAll(".color_grids div");
var rgb;

displayColorsOnGrids();
displayColorsOnHeading();
// ------functions------
function getRandomColors() {
  r = Math.round(Math.random() * 255);
  g = Math.round(Math.random() * 255);
  b = Math.round(Math.random() * 255);
  rgb = `rgb(${r}, ${g}, ${b})`;
}
// console.log(r);

function displayColorsOnHeading() {
  colorHeading.innerText = `RGB(${r}, ${g}, ${b})`;
}
function displayColorsOnGrids() {
  grids.forEach((grid) => {
    getRandomColors();
    grid.style.backgroundColor = rgb;
  });
}

// function getFirstRowGrid() {
//   for (i = 0; i < [...grids].length; i++) {
//     var first = [...grids][i];
//     console.log(first);
//   }
// }

// functions

// event listeners
refreshGameBtn.addEventListener("click", () => {
  displayColorsOnGrids();
  displayColorsOnHeading();
});

// convert the grids to an array and loop over them using forEach loop
[...grids].forEach((grids) => {
  grids.addEventListener("click", () => {
    if (grids.style.backgroundColor === rgb) {
      grids.style.backgroundColor = rgb;
      console.log(rgb);
    }
  });
});
