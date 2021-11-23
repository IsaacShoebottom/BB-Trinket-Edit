import { getPlayersOfType } from "isaacscript-common";

export function main(): void {
  // Instantiate a new mod object, which grants the ability to add callback functions that
  // correspond to in-game events
  const mod = RegisterMod("Blue Baby Petrified Poop", 1);

  // Set a callback function that corresponds to when a new run is started
  mod.AddCallback(ModCallbacks.MC_POST_PLAYER_INIT, postRunBegin);

  // Print an initialization message to the "log.txt" file
  Isaac.DebugString("BlueBabyPetrifiedStart initialized.");
}

function postRunBegin() {
  for (const player of getPlayersOfType(PlayerType.PLAYER_BLUEBABY)) {
    player.AddTrinket(TrinketType.TRINKET_PETRIFIED_POOP);
    Game().GetItemPool().RemoveTrinket(TrinketType.TRINKET_PETRIFIED_POOP);
  }
}
