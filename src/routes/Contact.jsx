import { useState } from "react";
import { Navbar } from "../components";
import copyLogo from '../assets/images/copy-logo.svg';
import checkLogo from '../assets/images/check-logo.svg';
import githubLogo from '../assets/images/github-mark-white.png';
import linkedinLogo from '../assets/images/linkedin-logo.webp';
import flowey from '../assets/images/flowey.webp';
import sans from '../assets/images/sans.webp';

export function Contact() {
    const [clipboardLogo, setClipboardLogo] = useState(copyLogo);

    function copyEmail() {
        navigator.clipboard.writeText('christophe.scherrer4@gmail.com');
        setClipboardLogo(checkLogo);
    }

    return (
        <>
            <Navbar currentPage="contact" />
            <main className="contact">
                <div className="contact__title-wrapper">
                    <h1 className="contact__title contact__title--front">christOphe scherrer</h1>
                    <h2 className="contact__title contact__title--back">christOphe scherrer</h2>
                    <div className="contact__heart"></div>
                </div>
                <div className="contact__wrapper">
                    <h2 className="contact__subtitle">Adresse Email :</h2>
                    <div className="contact__container">
                        <h3 className="contact__email">christophe.scherrer4@gmail.com</h3>
                        <img
                            className="contact__copy"
                            src={clipboardLogo} alt="Copy"
                            onClick={copyEmail}
                        />
                    </div>
                    <h2 className="contact__subtitle">Mes autres plateformes :</h2>
                    <a href="https://github.com/aphoyy" className="contact__link">- GitHub <img className="contact__logo" src={githubLogo} /></a>
                    <a href="https://www.linkedin.com/in/christophe-scherrer-5725b7322/" className="contact__link">- Linkedin <img className="contact__logo" src={linkedinLogo} /></a>
                </div>
            </main>
            <img className="flowey" src={flowey} alt="flowey" />
            <img className="sans" src={sans} alt="sans" />
        </>
    )
}