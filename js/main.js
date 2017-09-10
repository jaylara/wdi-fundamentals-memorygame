console.log("Up and running!");

//array of selectable cards
var cards = [
   {
     rank: "queen", suit: "hearts",
     cardImage: "images/queen-of-hearts.png"
   },
   {
     rank: "queen", suit: "diamonds",
     cardImage: "images/queen-of-diamonds.png"
   },
   {
     rank: "king", suit: "hearts",
     cardImage: "images/king-of-hearts.png"
   },
   {
     rank: "king", suit: "diamonds",
     cardImage: "images/king-of-diamonds.png"
   }
 ];
//array of two cards in play
var cardsInPlay = [];

//check for a match between index 0 and 1 in cardsInPlay
var checkForMatch = function() {
  if(cardsInPlay.length === 2) {
    if(cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!!");
    } else {
      alert("Sorry, try again!!");
    }
  }
}

//flips a card
var flipCard = function() {
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

/*START*/
createBoard();
