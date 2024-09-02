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
                        <li>Redux</li>
                        <li>Sass</li>
                        <li>Responsive design</li>
                        <li>SEO</li>
                    </ul>
                    <h2 className="box__subtitle">Outils :</h2>
                    <ul className="box__list">
                        <li>Git/GitHub</li>
                        <li>Vite</li>
                        <li>Create React App</li>
                        <li>Trello/Notion</li>
                        <li>Slack</li>
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
