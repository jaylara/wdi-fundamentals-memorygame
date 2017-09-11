console.log("Up and running!");

//for keeping score
var wins = 0, losses = 0;

//array of selectable cards
var cards = [
   { rank: "queen", suit: "hearts", cardImage: "images/queen-of-hearts.png" },
   { rank: "queen", suit: "diamonds", cardImage: "images/queen-of-diamonds.png" },
   { rank: "king", suit: "hearts", cardImage: "images/king-of-hearts.png" },
   { rank: "king", suit: "diamonds", cardImage: "images/king-of-diamonds.png" }
 ];

//array of two cards in play
var cardsInPlay = [];

//check for a match between index 0 and 1 in cardsInPlay
var checkForMatch = function() {
  if(cardsInPlay.length === 2) {
    if(cardsInPlay[0] === cardsInPlay[1]) {
      document.getElementById('wins').textContent = ++wins;
      document.getElementById('matchInfo').textContent = "You found a match!!";
    } else {
      document.getElementById('losses').textContent = ++losses;
      document.getElementById('matchInfo').textContent = "Sorry, try again!!";
    }
  }
}

//flips a card
var flipCard = function() {
  if(cardsInPlay.length === 2)  {
    document.getElementById('matchInfo').textContent = "Sorry, the Round has ended. The Board has been Reset.";
    resetBoard();
    return;
  }

  var cardId = this.getAttribute('data-id');
  console.log("User flipped "+ cards[cardId].rank
              +" ("+ cards[cardId].suit
              +", "+ cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  checkForMatch();
}

//creates game board
var createBoard = function() {
  for(i = 0; i < cards.length; i++) {
    var newCardImg = document.createElement('img');
    newCardImg.setAttribute('data-id', i);
    newCardImg.setAttribute('src', 'images/back.png');
    newCardImg.addEventListener('click',flipCard);
    document.getElementById('game-board').appendChild(newCardImg);

  }
}

//resets the game board
var resetBoard = function() {
  cardsInPlay = [];
  var imgs = document.getElementById('game-board').getElementsByTagName('img');
  for(i = 0; i < cards.length; i++) {
    imgs[i].setAttribute('src', 'images/back.png');
  }
}

createBoard();
