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
                        Passionné de jeux-vidéos et de nouvelles technologies, j&apos;ai commencé le développement en autodidacte en septembre 2023 puis j&apos;ai effectué une formation d&apos;Intégrateur Web d&apos;OpenClassrooms afin de consolider mes bases.
                    </p>
                    <br></br>
                    <p>Suite à cela, je souhaite désormais m&apos;intéresser au back-end et je suis à la recherche d&apos;une entreprise pour y faire mon alternance.</p>
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
