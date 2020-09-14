const cardsArray = [
	{
		name : 'shallNot',
		img  : 'pics/shallNot.gif'
	},
	{
		name : 'shallNot',
		img  : 'pics/shallNot.gif'
	},
	{
		name : 'beard',
		img  : 'pics/beard.gif'
	},
	{
		name : 'beard',
		img  : 'pics/beard.gif'
	},
	{
		name : 'gollum',
		img  : 'pics/gollum.gif'
	},
	{
		name : 'gollum',
		img  : 'pics/gollum.gif'
	},
	{
		name : 'helms',
		img  : 'pics/helms.gif'
	},
	{
		name : 'helms',
		img  : 'pics/helms.gif'
	},
	{
		name : 'potaytoes',
		img  : 'pics/potaytoes.gif'
	},
	{
		name : 'potaytoes',
		img  : 'pics/potaytoes.gif'
	},
	{
		name : 'witchKing',
		img  : 'pics/witchKing.gif'
	},
	{
		name : 'witchKing',
		img  : 'pics/witchKing.gif'
	}
];

cardsArray.sort(() => 0.5 - Math.random());

cardsChosen = [];
cardsChosenId = [];
cardsWon = [];
const grid = document.querySelector('.grid');

function createBoard() {
	for (let i = 0; i < cardsArray.length; i++) {
		var card = document.createElement('img');
		card.setAttribute('src', 'pics/ring.jpg');
		card.setAttribute('data-id', i);
		card.addEventListener('click', flipCard);
		grid.appendChild(card);
	}
}

function checkForMatch() {
	var cards = document.querySelectorAll('img');
	const optionOneId = cardsChosenId[0];
	const optionTwoId = cardsChosenId[1];
	if (cardsChosen[0] === cardsChosen[1]) {
		cardsWon.push(cardsChosen);
	}
	else {
		cards[optionOneId].setAttribute('src', 'pics/ring.jpg');
		cards[optionTwoId].setAttribute('src', 'pics/ring.jpg');
	}
	cardsChosen = [];
	cardsChosenId = [];
}

function flipCard() {
	var cardId = this.getAttribute('data-id');
	cardsChosen.push(cardsArray[cardId].name);
	cardsChosenId.push(cardId);
	this.setAttribute('src', cardsArray[cardId].img);
	if (cardsChosen.length === 2) {
		setTimeout(checkForMatch, 1500);
	}
}

createBoard();
