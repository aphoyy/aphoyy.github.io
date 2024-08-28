import { Banner, Navbar } from '../components'
import projects from '../data/projects.json'
import { useState } from 'react'

export function Projects() {
    const [currentProject, setCurrentProject] = useState(projects[0])

    function handleCarrousel(direction) {
        let projectIndex = projects.findIndex(element => element === currentProject);
        if (direction === "reverse") {
            projectIndex --;
            if (projectIndex < 0) {
                projectIndex = projects.length - 1;
            }
        } else {
            projectIndex ++;
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
                <Banner
                    imgUrl={currentProject.img}
                    title={currentProject.title}
                    text={currentProject.text}
                    github={currentProject.github}
                    tools={currentProject.tools}
                />
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
                <div className="arrow arrow--left" onClick={() => handleCarrousel("reverse")}>&lt;</div>
                <div className="arrow arrow--right" onClick={() => handleCarrousel()}>&gt;</div>
            </main>
        </>
    )
}