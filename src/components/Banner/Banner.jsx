import { useState } from 'react';
import projects from '../../data/projects.json';
import './Banner.scss';
import gitHubLogo from '../../assets/images/github-mark-white.png';

export function Banner() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    // Currrent and previous/next projects
    const currentProject = projects[currentProjectIndex];
    const nextProject = projects[normalizeIndex(currentProjectIndex + 1)];
    const previousProject = projects[normalizeIndex(currentProjectIndex - 1)];

    const listTools = currentProject.tools.map((tool) => 
        <li key={tool}>{tool}</li>
    );

    function handleCarrousel(direction) {
        let index = currentProjectIndex;
        direction === 'reverse' ? index-- : index++;
        setCurrentProjectIndex(normalizeIndex(index));
    }

    const dotList = [];
    for (let i = 0; i < projects.length; i++) {
        dotList.push(
            <li
                className={currentProjectIndex === i ? "dot selected" : "dot"}
                key={"dot" + i}
                onClick={() => setCurrentProjectIndex(i)}
            >
            </li>
        );
    }

    function normalizeIndex(index) {
        const projectMax = projects.length - 1;
        if (index < 0) {
            return projectMax;
        } else if (index > projectMax) {
            return 0;
        }
        return index;
    }

    return (
        <div className="banner">
            <img 
                className="banner__img"
                src={currentProject.imgUrl}
                draggable="false"
                alt={currentProject.title}
            />
            {/* Navigation arrows and dots */}
            <nav className="banner__nav">
                <div 
                    className="arrow arrow--left"
                    onClick={() => handleCarrousel("reverse")}
                >
                    &lt;
                </div>
                <ul className="project__list">{dotList}</ul>
                <div
                    className="arrow arrow--right"
                    onClick={() => handleCarrousel()}
                >
                    &gt;
                </div>
            </nav>
            {/* Title, desc and tools for current project */}
            <div className="banner__wrapper">
                <h1 className="banner__title">
                    {currentProject.title} 
                    <a href={currentProject.github} target="_blank">
                        <img className="banner__github" src={gitHubLogo} />
                    </a>
                </h1>
                <div className="banner__content">
                    <p className="banner__text">{currentProject.desc}</p>
                    <ul className="banner__list">{listTools}</ul>
                </div>
            </div>
            <img 
                className="banner__img test left"
                src={previousProject.imgUrl}
                draggable="false"
                alt={previousProject.title}
            />
            <img 
                className="banner__img test right"
                src={nextProject.imgUrl}
                draggable="false"
                alt={nextProject.title}
            />
        </div>
    );
}
