import { Link } from "react-router-dom";

export function Root() {
    return (
        <>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/contact">Contact</Link>
        </>
    )
}