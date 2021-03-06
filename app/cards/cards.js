export default class Card {
  static ranksInImagesOrder = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
  static suitsInImagesOrder = ["Clubs", "Spades", "Hearts", "Diamonds"];

  constructor(card){
    this.suit = card.suit;
    this.rank = card.rank;
    this.image = (Card.ranksInImagesOrder.indexOf(this.rank) * 4 + Card.suitsInImagesOrder.indexOf(this.suit) + 1) + ".png";
    this.color = card.suit === "Spades" || card.suit === "Clubs" ? "black" : "red";
    this.turnedUp = false;
    this.turnUp = this.turnUp.bind(this);
    this.turnDown = this.turnDown.bind(this);
  }

  turnUp = function () {
    this.turnedUp = true;
  }

  turnDown = function () {
    this.turnedUp = false;
  };
}

