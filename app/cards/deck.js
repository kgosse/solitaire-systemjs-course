/**
 * Created by kevin gosse on 25/11/2015.
 */
/*
 //import Card from "./cards.js";
 var Card = require("./cards.js").default;

 //export default function Deck() {
 function Deck() {
 this.unShuffled = function unShuffled() {
 return _.chain(Card.ranksInImagesOrder)
 .map(function (rank) {
 return Card.suitsInImagesOrder.map(function (suit) {
 return {
 suit: suit,
 rank: rank
 };
 });
 })
 .flatten()
 .map(function (card) {
 return new Card(card);
 })
 .value();
 };

 this.shuffled = function shuffled() {
 return _.shuffle(this.unShuffled());
 };
 }

 module.exports = Deck;*/

define(["./cards.js"], function(Card){
    Card = Card.default;
    function Deck() {
        this.unShuffled = function unShuffled() {
            return _.chain(Card.ranksInImagesOrder)
                .map(function (rank) {
                    return Card.suitsInImagesOrder.map(function (suit) {
                        return {
                            suit: suit,
                            rank: rank
                        };
                    });
                })
                .flatten()
                .map(function (card) {
                    return new Card(card);
                })
                .value();
        };

        this.shuffled = function shuffled() {
            return _.shuffle(this.unShuffled());
        };
    }
    return Deck;
});
