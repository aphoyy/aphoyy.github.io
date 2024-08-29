import { Navbar, Title } from '../components';
import flowey from '../assets/images/flowey.webp';
import sans from '../assets/images/sans.webp';

export function Skills() {
    return (
        <>
            <Navbar currentPage="skills" />
            <main className="box">
                <Title />
                <div className="box__wrapper">
                    <h2 className="box__subtitle">Mes compétences :</h2>
                    <ul className="box__list">
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
