import "klondike/game.js";
import "klondike/board.js";
import "klondike/klondike.js";
import "klondike/scoring.js";

angular.module("solitaire", ["klondike", "ngDraggable"]);

angular.element(document).ready(() => {
  angular.bootstrap(document, ["solitaire"]);
});
