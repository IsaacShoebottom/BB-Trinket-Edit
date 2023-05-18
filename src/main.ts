import {getPlayersOfType} from "isaacscript-common";
import {ModCallback, PlayerType, TrinketType} from "isaac-typescript-definitions";

const MOD_NAME = "Blue Baby Petrified Poop Start";

main();

function main() {
	const mod = RegisterMod(MOD_NAME, 1);

	mod.AddCallback(ModCallback.POST_PLAYER_INIT, () => {
		for (const player of getPlayersOfType(PlayerType.BLUE_BABY)) {
			player.AddTrinket(TrinketType.PETRIFIED_POOP);
			Game().GetItemPool().RemoveTrinket(TrinketType.PETRIFIED_POOP);
		}
	});

	// Print an initialization message to the "log.txt" file
	Isaac.DebugString("BlueBabyPetrifiedStart initialized.");
}
