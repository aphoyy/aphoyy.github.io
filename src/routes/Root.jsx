import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { playSound } from "../scripts/sound";
import '../scss/Root.scss';

export function Root() {
    const navigate = useNavigate();
    const [currentTitle, setCurrentTitle] = useState('');
    const [isHeart, setIsHeart] = useState(false);
    const title = 'christOphe scherrer'; // Upper case => heart
    let titleIndex = 0;

    // Interval at which letters appear
    let letterInterval = '';
    if (currentTitle === '') {
        letterInterval = setInterval(displayIntro, '95');
    }

    // Display title letter by letter
    function displayIntro() {
        if (titleIndex < title.length) {
            setCurrentTitle(title.slice(0, titleIndex + 1));
            titleIndex++;
            // Add red background to fill the heart
            if (titleIndex === 7) {
                setIsHeart(true);
            }
        } else {
            // Clear interval and show the blinking subtitle
            clearInterval(letterInterval);
            setTimeout(() => {
                document.querySelector('.intro__subtitle').classList.remove('hidden');
                playSound("introSound");
                enableInteraction();
                setBlinkInterval();
            }, '350');
        }
    }

    // Add click and enter listener
    function enableInteraction() {
        document.addEventListener('keydown', (event) => {
            event.key === 'Enter' ? nextPage() : null;
        });
        document.addEventListener('click', () => nextPage());
    }

    // Clock for making subtitle blink
    let blinkInterval = '';
    function setBlinkInterval() {
        blinkInterval = setInterval(blink, '1000');
    }

    // Make the subtitle blink
    function blink() {
        const subtitle = document.querySelector('.intro__subtitle');
        subtitle.classList.contains('hidden') ?
        subtitle.classList.remove('hidden') :
        subtitle.classList.add('hidden');
    }

    // Clear interval and go to /projects
    function nextPage() {
        clearInterval(blinkInterval);
        navigate('/projects');
    }

    return (
        <main className="intro">
            <div className="intro__wrapper">
                <h2 className="intro__title--back">{currentTitle}</h2>
                <h1 className="intro__title--front">{currentTitle}</h1>
                <div className={isHeart ? "intro__heart-logo heart" : "intro__heart-logo"}></div>
            </div>
            <p className="intro__subtitle hidden">[Click or press enter to start]</p>
        </main>
    )
}