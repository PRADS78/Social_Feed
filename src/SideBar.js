import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faUser, faUsers, faFilePen, faAddressCard, faDatabase } from "@fortawesome/free-solid-svg-icons"
import UserProfile from "./Components/UserProfile";
import MenuOptions from "./Components/MenuOptions";
import SeeMoreButton from "./Components/SeeMoreButton";
import { USER_PROFILE } from "./Components/SocialFeedData";
import {  RECENTLY_ADDED } from "./Components/SocialFeedData";
import "./SocialFeedStyles/SideBar.scss";

const SideBar = ({ hamBurgerMenuStatus,postsCount }) => {



    const MENU_OPTIONS= [
        {
            icon: <FontAwesomeIcon icon={faFileLines} />,
            id: 1,
            options: "Buzz home",
    
    
        },
        {
            icon: <FontAwesomeIcon icon={faFileLines} />,
            id: 2,
            options: "My Buzz Posts",
            count: postsCount,
          
        },
        {
            icon: <FontAwesomeIcon icon={faFilePen} />,
            id: 3,
            options: "Draft Post",
            count: 2,
           
        },
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            id: 4,
            options: "My Followers",
            count: 33,
           
        },
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            id: 5,
            options: "I am Following",
            count: 33,
           
        },
        {
            icon: <FontAwesomeIcon icon={faUsers} />,
            id: 6,
            options: "My Teams",
            count: 12,
            
    
        },
        {
            icon: <FontAwesomeIcon icon={faAddressCard} />,
            id: 7,
            options: "My Reportees",
            count: 12,
           
        },
        {
            icon: <FontAwesomeIcon icon={faFileLines} />,
            id: 8,
            options: "Files",
            count: 82,
     
        },
        {
            icon: <FontAwesomeIcon icon={faUsers} />,
            id: 9,
            options: "Team",
            count: 42,
        
        },
        {
            icon: <FontAwesomeIcon icon={faDatabase} />,
            id: 10,
            options: "Menu",
            count: 23,
            
        }
    
    ];
    
    const [showMenu, setShowMenu] = useState(false);
    const [showMenuRecent, setShowMenuRecent] = useState(false);
    
    const isShowMenu = (status) => {
        setShowMenu(status);
    }

    const isShowMenuRecent= (status) => {
        setShowMenuRecent(status);
    }


    return (
        <nav> 
        <div className={`sidebar ${hamBurgerMenuStatus && 'display'}`}>
            
            <UserProfile currentUserImg={USER_PROFILE} currentUserName="K Lokesh Rahul" />
            
            <div>
            <MenuOptions menuOptions={showMenu ? MENU_OPTIONS : MENU_OPTIONS.slice(0, 7)} />
            <SeeMoreButton seeMoreFunc={isShowMenu} />
            </div>
            

            <div>
            <div className="recently-added">Recently added:</div>
            <MenuOptions menuOptions={showMenuRecent ? RECENTLY_ADDED : RECENTLY_ADDED.slice(0, 3)} />
            <SeeMoreButton seeMoreFunc={isShowMenuRecent} />
            </div>
            
        </div>
        </nav>
        
         
    );
}

export default SideBar;






