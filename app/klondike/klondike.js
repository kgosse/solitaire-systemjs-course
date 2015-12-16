import angular from "angular";
import "klondike/game.js";
import "klondike/board.js";
import {Scoring} from "klondike/scoring.js";

angular.module("klondike.scoring", [])
    .service("scoring", [Scoring]);

angular.module("klondike", [
  "klondike.game",
  "klondike.board",
  "klondike.scoring"
]);
