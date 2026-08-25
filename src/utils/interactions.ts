import clickSoundFile from '../assets/clickcomp.mp3'

const STORAGE_KEY = 'wolfskii-sound'

class Interactions {
	private audio: HTMLAudioElement | null = null
	muted = false
	listeners: Array<(muted: boolean) => void> = []

	constructor() {
		try {
			this.muted = localStorage.getItem(STORAGE_KEY) === 'off'
		} catch {
			this.muted = false
		}
	}

	subscribe(fn: (muted: boolean) => void) {
		this.listeners.push(fn)
		fn(this.muted)
		return () => {
			this.listeners = this.listeners.filter((listener) => listener !== fn)
		}
	}

	private emit() {
		this.listeners.forEach((fn) => fn(this.muted))
	}

	toggleMute() {
		this.muted = !this.muted
		try {
			localStorage.setItem(STORAGE_KEY, this.muted ? 'off' : 'on')
		} catch {
			// private mode, ignore
		}
		this.emit()
		if (!this.muted) this.click()
	}

	click() {
		if (this.muted) return
		try {
			if (!this.audio) {
				this.audio = new Audio(clickSoundFile)
				this.audio.volume = 0.32
			}
			this.audio.currentTime = 0
			void this.audio.play()
		} catch {
			// Autoplay policies or missing audio should never block UI.
		}
	}
}

export default new Interactions()
