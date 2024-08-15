import PropTypes from 'prop-types'
import './Banner.scss'

export function Banner({ imgUrl, title, text }) {
    return (
        <div className="banner">
            <img className="banner__img" src={imgUrl} alt={title} />
            <div className="banner__wrapper">
                <h1 className="banner__title">{title}</h1>
                <p className="banner__text">{text}</p>
            </div>
        </div>
    )
}

Banner.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}