console.log("Up and running!");

//array of selectable cards
var cards = [
   {
     rank: "queen",
     suit: "hearts",
     cardImage: "images/queen-of-hearts.png"
   },
   {
     rank: "queen",
     suit: "diamonds",
     cardImage: "images/queen-of-diamonds.png"
   },
   {
     rank: "king",
     suit: "hearts",
     cardImage: "images/king-of-hearts.png"
   },
   {
     rank: "king",
     suit: "diamonds",
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
var flipCard = function(cardId) {
  console.log("User flipped "+ cards[cardId].rank
              +" ("+ cards[cardId].suit
              +", "+ cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);

  checkForMatch();
}

flipCard(0);
flipCard(2);

/* Save for later
var grungeAlbumsJSON = JSON.stringify(grungeAlbums);
console.log(grungeAlbumsJSON);
var grungeAlbumsObject = JSON.parse(grungeAlbumsJSON);
console.log(grungeAlbumsObject.albums.length);
for(i = 0; i < grungeAlbumsObject.albums.length; i++) {
  var currRec = grungeAlbumsObject.albums[i];
  console.log(currRec.name +" by "
              + currRec.artist +" sold "
              + currRec.unitsSold +" units. ");
}
*/
