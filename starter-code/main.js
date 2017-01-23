var cards = ['queen', 'queen', 'king', 'king']
var cardsInPlay = []

var gameBoard = document.getElementById("game-board");

function createBoard() {
	for(var i = 0; i < cards.length; i++) {
		var div = document.createElement('div');
		div.className = 'card';
		div.setAttribute('data-card', cards[i]);
		div.addEventListener('click', isTwoCards);
		gameBoard.appendChild(div);
	}

}

createBoard();

function isTwoCards() {

	var dataCard = this.getAttribute('data-card');
	cardsInPlay.push(dataCard);
	
	if (dataCard == 'queen') {
		this.innerHTML = '<img src="queen.png" alt = "queen of spades"/>'
	} else {
		this.innerHTML = '<img src="king.png" alt = "queen of spades"/>'
	}


	if (cardsInPlay.length == 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch(arr) {
	if (arr[0] == arr[1]) {
		alert("It's a match!");
	} else {
		alert("Try again.");
	}
}