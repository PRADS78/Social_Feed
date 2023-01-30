import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../SocialFeedStyles/SeeMoreButton.scss";
import { faAngleDown,faAngleUp } from "@fortawesome/free-solid-svg-icons";


const SeeMoreButton = ({seeMoreFunc}) => {
    const [isOpen, setIsOpen] = useState(true);
    const handleButton=()=>{
        setIsOpen(!isOpen);
        seeMoreFunc(isOpen);
        }

    return (
        <div className="see-more-parent">
            <button onClick={handleButton}className="see-more-button">
                {isOpen ? 'See More' : 'See Less' }<FontAwesomeIcon icon={isOpen?faAngleDown:faAngleUp}  className="see-more-icon"/></button>
        </div>
    );
}

export default SeeMoreButton;
