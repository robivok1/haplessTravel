var numSquares = 20;
var colors = generateColors(numSquares);
var squares = document.querySelectorAll(".square");
var  pickedColor = pickColor();
var colorDisplay = document.getElementById("colordisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

resetButton.addEventListener("click", function(){
reset ();
})

for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if (this.textContent === "Easy"){
			numSquares = 6;
			for (var i = 0; i < squares.length; i++){
				squares[i].classList.add("big");
				} 
		} else {
			numSquares = 20;
			for (var i = 0; i < squares.length; i++){
				squares[i].classList.remove("big");
				} 
			}

		reset();

})}

function reset() {
	colors = generateColors(numSquares);
	pickedColor = pickColor();
	colordisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "#4682b4";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
}

colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
	if (clickedColor === pickedColor) {
		messageDisplay.textContent = "Correct!";
		changeColors(clickedColor);
		resetButton.textContent = "Play Again!"
		h1.style.backgroundColor = pickedColor;
	} else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again!";
	}
	});
}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
	 squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColors(num) {
var arr =[]
for (var i = 0; i < num; i++) {
	arr.push(randomColor());
}
return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}