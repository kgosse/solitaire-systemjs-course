import Pile from "./pile";
import _ from "underscore";

export default class TableauPile extends Pile{
  constructor(cards, scoring){
    super(cards, scoring)
  }

  turnTopCardUp() {
    this.topCard().turnUp();
  }

  willAcceptCard (card) {
    if (this.isEmpty()) {
      return card.rank === "King";
    }

    var topCard = this.topCard();
    var nextLowerRank = Pile.increasingRanks[Pile.increasingRanks.indexOf(topCard.rank) - 1];
    return card.rank === nextLowerRank &&
        card.color !== topCard.color;
  }

  drop (card) {
    if (this.willAcceptCard(card)) {
      this.addTopCard(card);
      return true;
    }
    return false;
  }

  removeCard (card) {
    super.removeCard(card);
    var topCard = this.topCard();
    if (!topCard) {
      return;
    }
    if (!topCard.turnedUp) {
      this.scoring.tableauCardTurnedUp();
    }
    topCard.turnUp();
  }

  moveFromTableau (source) {
    var destination = this;
    var acceptIndex = _.findIndex(source.cards, (card)=> {
      return card.turnedUp && destination.willAcceptCard(card);
    });
    if (acceptIndex < 0) {
      return;
    }
    var rest = _.rest(source.cards, acceptIndex);
    rest.forEach(function (card) {
      source.removeCard(card);
      destination.addTopCard(card);
    });
  }

  moveCardsFrom (source) {
    if(source == null) {
      return;
    }
    if (source instanceof TableauPile) {
      this.moveFromTableau(source);
      return;
    }
    this.moveTopCardFrom(source);
  }

  heightForDrop() {
    return (96 + Math.max(0, this.cards.length - 1) * 16) + 'px';
  }
}




