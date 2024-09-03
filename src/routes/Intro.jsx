import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title } from '../components';
import '../scss/intro.scss';

export function Intro() {
    const navigate = useNavigate();
    const [currentTitle, setCurrentTitle] = useState('');
    const [isHeartHidden, setIsHeartHidden] = useState(true);
    const [switchPage, setSwitchPage] = useState(false);

    // Upper case = heart
    const title = 'christOphe scherrer';
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
                setIsHeartHidden(false);
            }
        } else {
            // Clear interval and show the blinking subtitle
            clearInterval(letterInterval);
            setTimeout(() => {
                document.querySelector('.intro__subtitle').classList.remove('hidden');
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
        blinkInterval = setInterval(blink, '1600');
    }

    // Make the subtitle blink
    function blink() {
        const subtitle = document.querySelector('.intro__subtitle');
        subtitle.classList.contains('hidden')
            ? subtitle.classList.remove('hidden')
            : subtitle.classList.add('hidden');
    }

    // Clear interval and set switchPage to true
    function nextPage() {
        clearInterval(blinkInterval);
        setSwitchPage(true);
    }

    // Go to /projects when switchPage is true
    useEffect(() => {
        if (switchPage) {
            navigate('/projects');
        }
    }, [switchPage, navigate]);

    return (
        <main className="intro">
            <Title currentTitle={currentTitle} isHeartHidden={isHeartHidden} />
            <p className="intro__subtitle hidden">
                [Cliquez ou appuyez sur entrée pour démarrer]
            </p>
        </main>
    );
}
