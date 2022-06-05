class AutoPlay {
	constructor() {}
	run(player) {
		if (!player.muted) {
			player.muted = false;
		}
		player.play();
	}
}

export default AutoPlay;
