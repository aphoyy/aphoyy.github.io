import { Navbar } from "../components";
import flowey from '../assets/images/flowey.webp';
import sans from '../assets/images/sans.webp';

export function About() {
    return (
        <>
            <Navbar currentPage="about" />
            <main className="contact">
                <div className="contact__title-wrapper">
                    <h1 className="contact__title contact__title--front">christOphe scherrer</h1>
                    <h2 className="contact__title contact__title--back">christOphe scherrer</h2>
                    <div className="contact__heart"></div>
                </div>
                <div className="contact__wrapper">
                    <h2 className="contact__subtitle">A propos de moi :</h2>
                    <p>Je suis passionné par développement, j&apos;ai commencé en autodidacte en septembre 2023 puis avec OpenClassrooms d&apos;avril à septembre 2024 en tant qu&apos;intégrateur web. </p>
                    <br></br>
                    <p>Je recherche désormais une alternance dans le back-end afin de devenir développeur full-stack</p>
                </div>
            </main>
            <img className="flowey" src={flowey} alt="flowey" />
            <img className="sans" src={sans} alt="sans" />
        </>
    )
}