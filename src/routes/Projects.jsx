import { Banner, Navbar } from '../components';
import leftBanner from '../assets/images/left-side-banner.jpg';
import rightBanner from '../assets/images/right-side-banner.jpg';

export function Projects() {



    return (
        <>
            <Navbar currentPage="projects" />
            <main>
                <Banner />
                <img className="dogs left-banner" src={leftBanner} />
                <img className="dogs right-banner" src={rightBanner} />
            </main>
        </>
    );
}
