import clickSoundFile from '../assets/clickcomp.mp3'

class Interactions {
	clickSound = clickSoundFile
	clickAudio = new Audio(clickSoundFile)

	click() {
		this.clickAudio.play()
	}
}

export default new Interactions()
