import PropTypes from 'prop-types';
import './Title.scss';

export function Title({ currentTitle, isHeartHidden }) {
    return (
        <div className="title">
            <h1 className="title__text title__text--front">{currentTitle !== undefined ? currentTitle : "christOphe scherrer"}</h1>
            <h2 className="title__text title__text--back">{currentTitle !== undefined ? currentTitle : "christOphe scherrer"}</h2>
            <div className={isHeartHidden ? "" : "title__heart"}></div>
        </div>
    )
}

Title.propTypes = {
    currentTitle: PropTypes.object,
    isHeartHidden: PropTypes.bool,
}