"use strict";

import PopUp from "./popup.js";
import GameBuilder from "./game.js";

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
  .gameDuration(20)
  .carrotCount(10)
  .bugCount(10)
  .build();

game.setGameStopListener((reason) => {
  let message;

  switch (reason) {
    case "cancel":
      message = "REPLAY❓";
      break;
    case "win":
      message = "YOU WIN 🎉";
      break;
    case "lose":
      message = "YOU LOSE 💩";
      break;
    default:
      throw new Error("not valid reason");
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
