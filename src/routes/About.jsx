import { Navbar, Title } from '../components';
import flowey from '../assets/images/flowey.webp';
import sans from '../assets/images/sans.webp';

export function About() {
    return (
        <>
            <Navbar currentPage="about" />
            <main className="box">
                <Title />
                <div className="box__wrapper">
                    <h2 className="box__subtitle">A propos de moi :</h2>
                    <p>
                        Je suis passionné par développement, j&apos;ai commencé en autodidacte en septembre 2023 puis avec 
                        OpenClassrooms d&apos;avril à septembre 2024 en tant qu&apos;intégrateur web.
                    </p>
                    <br></br>
                    <p>Je recherche désormais une alternance dans le back-end afin de devenir développeur full-stack</p>
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
