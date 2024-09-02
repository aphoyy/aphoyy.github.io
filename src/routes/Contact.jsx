import { useState } from 'react';
import { Navbar, Title } from '../components';
import copyLogo from '../assets/images/clipboard-copy.png';
import checkLogo from '../assets/images/clipboard-success.png';
import githubLogo from '../assets/images/github-mark-white.png';
import linkedinLogo from '../assets/images/linkedin-logo.webp';
import flowey from '../assets/images/flowey.webp';
import sans from '../assets/images/sans.webp';

export function Contact() {
    // State variable to swap the logo of the clipboard
    const [clipboardLogo, setClipboardLogo] = useState(copyLogo);

    // Copy email to clipboard and display a success logo
    function copyEmail() {
        navigator.clipboard.writeText('christophe.scherrer4@gmail.com');
        setClipboardLogo(checkLogo);
    }

    return (
        <>
            <Navbar currentPage="contact" />
            <main className="box">
                <Title />
                <div className="box__wrapper">
                    <h2 className="box__subtitle">Adresse Email :</h2>
                    <div className="email">
                        <h3 className="email__title">christophe.scherrer4@gmail.com</h3>
                        <img
                            className="email__copy"
                            src={clipboardLogo} alt="Copy"
                            onClick={copyEmail}
                        />
                    </div>
                    <h2 className="box__subtitle">Mes autres plateformes :</h2>
                    <a href="https://github.com/aphoyy" className="box__link">
                        - GitHub
                        <img className="box__logo" src={githubLogo} />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/christophe-scherrer-5725b7322/"
                        className="box__link"
                    >
                        - Linkedin
                        <img className="box__logo" src={linkedinLogo} />
                    </a>
                </div>
            </main>
            <img 
                className="flowey"
                src={flowey}
                draggable="false"
                alt="flowey"
            />
            <img 
                className="sans"
                src={sans}
                draggable="false"
                alt="sans"
            />
        </>
    );
}
