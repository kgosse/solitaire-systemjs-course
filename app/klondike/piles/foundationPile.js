import Pile from "./pile";

export default class FoundationPile extends Pile {
  constructor(cards, scoring){
    super(cards, scoring);
  }

  willAcceptCard (card) {
    if (this.isEmpty()) {
      return card.rank === "Ace";
    }

    var topCard = this.topCard();
    var nextRank = Pile.increasingRanks[Pile.increasingRanks.indexOf(topCard.rank) + 1];
    return topCard.suit === card.suit
        && card.rank === nextRank;
  }

  drop (card) {
    if (this.willAcceptCard(card)) {
      this.addTopCard(card);
      return true;
    }
    return false;
  }
}

