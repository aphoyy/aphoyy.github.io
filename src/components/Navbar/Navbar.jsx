import PropTypes from 'prop-types'
import { NavButton } from '../../components';
import './Navbar.scss'

export function Navbar({ currentPage }) {
    return (
        <nav className="nav">
            <NavButton
                icon="<>"
                text="PROJECTS"
                link="/projects"
                isCurrentPage={currentPage === "projects" ? true : false}
            />
            <NavButton
                icon="%"
                text="ABOUT"
                link="/about"
                isCurrentPage={currentPage === "about" ? true : false}
            />
            <NavButton
                icon="&"
                text="SKILLS"
                link="/skills"
                isCurrentPage={currentPage === "skills" ? true : false}
            />
            <NavButton
                icon="$"
                text="CONTACT"
                link="/contact"
                isCurrentPage={currentPage === "contact" ? true : false}
            />
        </nav>
    )
}

Navbar.propTypes = {
    currentPage: PropTypes.string.isRequired,
}