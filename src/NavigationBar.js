import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons';
import "./SocialFeedStyles/NavigationBar.scss";

const NavigationBar = ({ isHamburgerActive }) => {

    return (
        <header>
       <div className="navbar">
            <div className="navbar-controls">
                <FontAwesomeIcon icon={faArrowLeft} size="2x" className="arrow-left" />
                <div className="navbar-text">
                    <span className="dashboard">Dashboard</span>
                    <FontAwesomeIcon icon={faAngleRight} size="sm" className="angle-right" />
                    <span className="social-feed">Social Feed</span>
                </div>
            </div>
            <FontAwesomeIcon icon={faBars} size="lg" className="hamburger-menu" onClick={isHamburgerActive} />
        </div>
        </header >
    );
}

export default NavigationBar;