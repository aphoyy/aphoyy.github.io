import { Banner, Navbar } from '../components';
import leftBanner from '../assets/images/left-side-banner.jpg';
import rightBanner from '../assets/images/right-side-banner.jpg';

export function Projects() {
    return (
        <>
            <Navbar currentPage="projects" />
            <main className="projects">
                <Banner />
                <img 
                    className="projects__dog projects__dog--left"
                    src={leftBanner}
                    alt="Undertale dog in armor with a spear"
                />
                <img
                    className="projects__dog projects__dog--right"
                    src={rightBanner}
                    alt="Undertale dog in armor with a shield and a sword"
                />
            </main>
        </>
    );
}
