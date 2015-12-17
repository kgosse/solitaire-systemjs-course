import Pile from "./pile";

class WastePile extends Pile{
  constructor(cards, scoring){
    super(cards, scoring);
  }
}

export default class RemainderPile extends Pile{
  constructor(cards, scoring){
    super(cards, scoring);
    this.waste = new WastePile([], scoring);
  }

  flipTopCardToWaste() {
    var card = this.topCard();
    if (card === undefined) {
      this.recycleWaste();
      this.scoring.wasteRecycled();
      return;
    }
    this.flipToWaste(card);
  }

  flipToWaste(card) {
    this.removeCard(card);
    this.waste.addTopCard(card);
    card.turnUp();
  }

  recycleWaste() {
    this.cards = this.waste.cards.reverse();
    this.waste = new WastePile([], this.scoring);
    this.cards.forEach(function (card) {
      card.turnDown();
    });
  }
}




