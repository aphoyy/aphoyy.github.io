import { Navbar, Title } from '../components';
import mettaton from '../assets/images/mettaton.webp';

export function About() {
    return (
        <>
            <Navbar currentPage="about" />
            <main className="box about">
                <Title />
                <div className="box__wrapper">
                    <h2 className="box__subtitle">A propos de moi :</h2>
                    <p>
                        Passionné par les jeux vidéo et les nouvelles technologies, j&apos;ai débuté le développement en autodidacte en septembre 2023. 
                        Pour renforcer mes compétences, j&apos;ai suivi une formation d&apos;Intégrateur Web chez OpenClassrooms, où j&apos;ai acquis une solide maîtrise des bases du front-end.
                    </p>
                    <br></br>
                    <p>
                        Avec cette base, je souhaite désormais apprendre le back-end tout en consolidant mes connaissances front-end. Je suis actuellement à la recherche d&apos;une entreprise 
                        pour une alternance, afin de me spécialiser en développement full-stack.
                    </p>
                </div>
            </main>
            <img 
                className="character character--mettaton" 
                src={mettaton}
                draggable="false"
                alt="mettaton"
            />
        </>
    );
}
