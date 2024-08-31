import { useState } from 'react';
import { Banner, Navbar } from '../components';
import projects from '../data/projects.json';
import leftBanner from '/public/assets/left-side-banner.jpg';
import rightBanner from '/public/assets/right-side-banner.jpg';

export function Projects() {
    const [currentProject, setCurrentProject] = useState(projects[0]);

    function handleCarrousel(direction) {
        let projectIndex = projects.findIndex(
            (element) => element === currentProject
        );
        if (direction === 'reverse') {
            projectIndex--;
            if (projectIndex < 0) {
                projectIndex = projects.length - 1;
            }
        } else {
            projectIndex++;
            if (projectIndex > projects.length - 1) {
                projectIndex = 0;
            }
        }
        setCurrentProject(projects[projectIndex]);
    }

    return (
        <>
            <Navbar currentPage="projects" />
            <main>
                <Banner currentProject={currentProject} />
                <img className="dogs left-banner" src={leftBanner} onClick={() => handleCarrousel("reverse")} />
                <img className="dogs right-banner" src={rightBanner} onClick={() => handleCarrousel()} />
                <div 
                    className="arrow arrow--left"
                    onClick={() => handleCarrousel("reverse")}
                >
                    &lt;
                </div>
                <div
                    className="arrow arrow--right"
                    onClick={() => handleCarrousel()}
                >
                    &gt;
                </div>
            </main>
        </>
    );
}
