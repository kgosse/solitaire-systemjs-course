export default class Pile {

  static increasingRanks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

  constructor(cards, scoring) {
    this.cards = cards || [];
    this.scoring = scoring;
  }


  isEmpty () {
    return this.cards.length === 0;
  }

  topCard () {
    return this.cards[this.cards.length - 1];
  }

  removeCard (card) {
    var index = this.cards.indexOf(card);
    this.cards.splice(index, 1);
  }

  addTopCard  (card) {
    this.cards.push(card);
  }

  moveTopCardFrom (source) {
    var topOfSource = source.topCard();
    var accepted = this.drop(topOfSource);
    if (accepted) {
      this.scoring.dropped(source.constructor, this.constructor);
      source.removeCard(topOfSource);
    }
  }


}

Pile.prototype.moveCardsFrom = Pile.prototype.moveTopCardFrom;
