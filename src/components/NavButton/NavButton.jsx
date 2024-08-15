import { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import orangeHeart from '/src/assets/images/undertale-logo-orange.png'
import yellowHeart from '/src/assets/images/undertale-logo-yellow.png'
import './NavButton.scss'

export function NavButton({ icon, text, isCurrentPage, link }) {
    const [heartColor, setHeartColor] = useState("orange");
    // Switch heart color if hover
    return (
        <Link
            to={link}
            className="button"
            onMouseEnter={() => setHeartColor("yellow")}
            onMouseLeave={() => setHeartColor("orange")}
        >
            <span className="button__div">
                {isCurrentPage === true ? (
                    <>
                        <img 
                            className={heartColor === "orange" ? "button__heart" : "button__heart hidden"}
                            src={orangeHeart}
                        />
                        <img
                            className={heartColor === "yellow" ? "button__heart" : "button__heart hidden"}
                            src={yellowHeart}
                        />
                    </>
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