import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import heartIcon from '/src/assets/images/undertale-logo-orange.png'
import './NavButton.scss'

export function NavButton({ icon, text, isCurrentPage, link }) {
    console.log(isCurrentPage)
    return (
        <Link to={link} className="button">
            <span className="button__div">
                {isCurrentPage === true ? (
                    <img className="button__heart" src={heartIcon} />
                ) : (
                    icon
                )}
            </span>
            <span className="button__text">{text}</span>
        </Link>
    )
}

NavButton.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isCurrentPage: PropTypes.bool.isRequired,
    link: PropTypes.string.isRequired,
}