import PropTypes from 'prop-types';
import './Banner.scss';
import gitHubLogo from '../../assets/images/github-mark-white.png';

export function Banner({ currentProject }) {
    const listTools = currentProject.tools.map((tool) => 
        <li key={tool}>{tool}</li>
    );

    return (
        <div className="banner">
            <img 
                className="banner__img"
                src={currentProject.imgUrl}
                draggable="false"
                alt={currentProject.title}
            />
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
        </div>
    );
}

Banner.propTypes = {
    currentProject: PropTypes.object.isRequired,
}
