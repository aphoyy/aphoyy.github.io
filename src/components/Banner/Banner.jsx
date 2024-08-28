import PropTypes from 'prop-types'
import './Banner.scss'
import gitHubLogo from '../../assets/images/github-mark-white.png';

export function Banner({ currentProject }) {
    console.log(currentProject.imgUrl)

    return (
        <div className="banner">
            <img className="banner__img" src={currentProject.imgUrl} alt={currentProject.title} />
            <div className="banner__wrapper">
                <h1 className="banner__title">
                    {currentProject.title} 
                    <a href={currentProject.github} target="_blank">
                        <img className="banner__github" src={gitHubLogo} />
                    </a>
                </h1>
                <p className="banner__text">{currentProject.desc}</p>
                <p>{currentProject.tools}</p>
            </div>
        </div>
    )
}

Banner.propTypes = {
    currentProject: PropTypes.object.isRequired,
}