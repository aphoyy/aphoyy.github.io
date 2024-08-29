import { useState } from 'react';
import { Banner, Navbar } from '../components';
import projects from '../data/projects.json';

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
                <div className="background">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
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
