var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// if (cardTwo === cardFour || cardTwo === cardFour || cardOne === cardThree || cardOne === cardFour) {
// 	alert("Not a match, try again!");
// } else {
// 	alert("You have a match");
// } 

var gameBoard = document.getElementById("game-board");

function createCards() {
	for(var i = 0; i < 4; i+=1) {
		var div = document.createElement('div');
		div.className = 'card';
		gameBoard.appendChild(div);
	}
}

createCards();
