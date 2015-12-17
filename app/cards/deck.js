/**
 * Created by kevin gosse on 25/11/2015.
 */
import _ from "underscore";
import Card from "./cards.js";

export default class Deck {
    unShuffled() {
        return _.chain(Card.ranksInImagesOrder)
            .map((rank)=> {
                return Card.suitsInImagesOrder.map((suit)=> {
                    return {
                        suit: suit,
                        rank: rank
                    };
                });
            })
            .flatten()
            .map((card)=> {
                return new Card(card);
            })
            .value();
    }

    shuffled() {
        return _.shuffle(this.unShuffled());
    }
}
