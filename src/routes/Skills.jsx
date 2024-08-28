import { Navbar } from '../components'
import flowey from '../assets/images/flowey.webp';
import sans from '../assets/images/sans.webp';

export function Skills() {
    return (
        <>
            <Navbar currentPage="skills" />
            <main className="contact">
                <div className="contact__title-wrapper">
                    <h1 className="contact__title contact__title--front">christOphe scherrer</h1>
                    <h2 className="contact__title contact__title--back">christOphe scherrer</h2>
                    <div className="contact__heart"></div>
                </div>
                <div className="contact__wrapper">
                    <h2 className="contact__subtitle">Mes compétences :</h2>
                    <ul className="list">
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Scss</li>
                        <li>Git/GitHub</li>
                        <li>Responsive design</li>
                        <li>SEO</li>
                    </ul>
                </div>
            </main>
            <img className="flowey" src={flowey} alt="flowey" />
            <img className="sans" src={sans} alt="sans" />
        </>

    )
}