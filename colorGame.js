var numOfSquares = 9;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	//mode buttons event listeners
	for ( var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			modeButtons[2].classList.remove("selected");
			this.classList.add("selected");
			// this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
			if ( this.textContent === "Easy" ){
				numOfSquares = 3;
				for (var i = 0; i < numOfSquares; i++)
				{
					squares[i].style.paddingBottom = "30%"
				}
			} else if ( this.textContent === "Medium" ) {
				numOfSquares = 6;
				for (var i = 0; i < numOfSquares; i++)
				{
					squares[i].style.paddingBottom = "30%"
				}
			} else {
				numOfSquares = 9;
				for (var i = 0; i < numOfSquares; i++)
				{
					squares[i].style.paddingBottom = "23%"
				}
			}
			reset();
		});
	}
}

function setUpSquares(){
	for (var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor 
			if ( clickedColor === pickedColor ){
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again?";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}
}


function reset(){
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for ( var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function(){
	reset();
});

function changeColor(color){
	for ( var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}


function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}