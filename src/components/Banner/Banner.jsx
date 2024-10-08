import { useState } from 'react';
import projects from '../../data/projects.json';
import gitHubLogo from '../../assets/images/icons/github-mark-white.png';
import './Banner.scss';

export function Banner() {
    // State variable to track the index of the currently displayed project
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    // Determines the current, next and previous projects based on the current index
    const currentProject = projects[currentProjectIndex];
    const nextProject = projects[normalizeIndex(currentProjectIndex + 1)];
    const previousProject = projects[normalizeIndex(currentProjectIndex - 1)];

    // Set the current project index based on the user's direction input
    function handleCarrousel(direction) {
        let index = currentProjectIndex;
        direction === 'reverse' ? index-- : index++;
        setCurrentProjectIndex(normalizeIndex(index));
    }

    // Adjusts the index to wrap around the boundaries of the array
    function normalizeIndex(index) {
        const projectMax = projects.length - 1;
        if (index < 0) {
            return projectMax;
        } else if (index > projectMax) {
            return 0;
        }
        return index;
    }

    // Create a list of dot elements representing each project
    const dotList = [];
    for (let i = 0; i < projects.length; i++) {
        dotList.push(
            <li
                className={currentProjectIndex === i ? "banner__dot selected" : "banner__dot"}
                key={"dot" + i}
                onClick={() => setCurrentProjectIndex(i)}
            >
            </li>
        );
    }

    // Create a list of tools used in the project
    const listTools = currentProject.tools.map((tool) => 
        <li key={tool}>{tool}</li>
    );

    return (
        <div className="banner">
            {/* Main and secondaries banner images */}
            <div className='relative'>
                <img
                    className="banner__img middle"
                    src={currentProject.imgUrl}
                    alt={currentProject.title}
                />
                <img
                    className="banner__img banner__img--small left"
                    src={previousProject.imgUrl}
                    alt={previousProject.title}
                />
                <img 
                    className="banner__img banner__img--small right"
                    src={nextProject.imgUrl}
                    alt={nextProject.title}
                />
            </div>
            {/* Navigation arrows and dots */}
            <nav className="banner__nav">
                <div 
                    className="banner__arrow banner__arrow--left"
                    onClick={() => handleCarrousel("reverse")}
                >
                    &lt;
                </div>
                <ul className="banner__dot-list">{dotList}</ul>
                <div
                    className="banner__arrow banner__arrow--right"
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
                        <img className="banner__github" src={gitHubLogo} alt="GitHub logo" />
                    </a>
                </h1>
                <div className="banner__content">
                    <p className="banner__text">{currentProject.desc}</p>
                    <ul className="banner__list">{listTools}</ul>
                </div>
            </div>
        </div>
    );
}
