import introSoundSrc from '../assets/sound/introSound.ogg'

const introSound = new Audio(introSoundSrc);
introSound.load();

export function playSound() {
    introSound.play();
}