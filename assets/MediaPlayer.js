class MediaPlayer {
	constructor(config) {
		this.media = config.el;
		this.plugins = config.plugins || [];
		this._initPlugins();
	}

	_initPlugins() {
		this.plugins.forEach((plugin) => {
			plugin.run(this);
		});

		const player = {
			play: () => this.play(),
			pause: () => this.pause(),
			media: this.media,
			get muted() {
				return this.media.muted;
			},

			set muted(value) {
				this.media.muted = value;
			}
		};
	}

	mute() {
		this.media.muted = true;
	}

	unmute() {
		this.media.muted = false;
	}

	play() {
		this.media.play();
	}

	pause() {
		this.media.pause();
	}

	togglePlay() {
		if (this.media.paused) {
			this.play();
		} else {
			this.pause();
		}
	}

	toggleMute() {
		if (this.media.muted) {
			this.unmute();
		} else {
			this.mute();
		}
	}
}

export default MediaPlayer;
