import PropTypes from 'prop-types'
import './Banner.scss'
import gitHubLogo from '../../assets/images/github-mark-white.png';

export function Banner({ imgUrl, title, text, github, tools }) {
    return (
        <div className="banner">
            <img className="banner__img" src={imgUrl} alt={title} />
            <div className="banner__wrapper">
                <h1 className="banner__title">{title} <a href={github} target="_blank"><img className="banner__github" src={gitHubLogo} /></a></h1>
                <p className="banner__text">{text}</p>
                <p>{tools}</p>
            </div>
        </div>
    )
}

Banner.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}