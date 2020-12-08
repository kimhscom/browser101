"use strict";

import PopUp from "./popup.js";
import { GameBuilder, Reason } from "./game.js";

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
  .withGameDuration(20)
  .withCarrotCount(10)
  .withBugCount(10)
  .build();

game.setGameStopListener((reason) => {
  let message;

  switch (reason) {
    case Reason.cancel:
      message = "REPLAY❓";
      break;
    case Reason.win:
      message = "YOU WIN 🎉";
      break;
    case Reason.lose:
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
