import PropTypes from 'prop-types';
import { NavButton } from '../../components';
import './Navbar.scss';

export function Navbar({ currentPage }) {
    return (
        <nav className="nav">
            <NavButton
                icon="<>"
                text="PROJETS"
                link="/projects"
                isCurrentPage={currentPage === "projects" ? true : false}
            />
            <NavButton
                icon="%"
                text="A&nbsp;&nbsp;&nbsp;PROPOS" // Multiples spaces because font makes space too small
                link="/about"
                isCurrentPage={currentPage === "about" ? true : false}
            />
            <NavButton
                icon="&"
                text="COMPÉTENCES"
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
    );
}

Navbar.propTypes = {
    currentPage: PropTypes.string.isRequired,
}
