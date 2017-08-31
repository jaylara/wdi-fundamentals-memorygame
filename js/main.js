console.log("Up and running!");

//array of selectable cards
var cards = ["queen", "queen", "king", "king"];
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
var flipCard = function(cardId) {
  console.log("User flipped "+ cards[cardId]);
  cardsInPlay.push(cards[cardId]);

  checkForMatch();
}

flipCard(0);
