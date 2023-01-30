import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faUser, faUsers, faFilePen, faAddressCard, faDatabase } from "@fortawesome/free-solid-svg-icons"
import Avatar from "../UserProfile/Avatar.svg";
import OtherUserVirat from "../UserProfile/OtherUserRohitFans.svg";
import OtherUserDhoni from "../UserProfile/OtherUserDhoni.svg";
import OtherUserRohit from "../UserProfile/OtherUserRohit.svg";


//LEFTPANEL_USERPROFILE
export const USER_PROFILE=Avatar;

// LEFT_PANEL_MENUOPTIONS

export const MENU_OPTIONS= [
    {
        icon: <FontAwesomeIcon icon={faFileLines} />,
        id: 1,
        options: "Buzz home",


    },
    {
        icon: <FontAwesomeIcon icon={faFileLines} />,
        id: 2,
        options: "My Buzz Posts",
        count: "",
      
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

// LEFT_PANEL_RECENTLY_ADDED_DATA
export const RECENTLY_ADDED = [
    {
        icon: <FontAwesomeIcon icon={faFileLines} />,
        id: 1,
        options: "New Artefacts",
        count: 82,
       
    },
    {
        icon: <FontAwesomeIcon icon={faFileLines} />,
        id: 2,
        options: "New Modules",
        count: 42,
        
    },
    {
        icon: <FontAwesomeIcon icon={faDatabase} />,
        id: 3,
        options: "New Skills",
        count: 23,
      
    },
    {
        icon: <FontAwesomeIcon icon={faFileLines} />,
        id: 4,
        options: "New Items",
        count: 82,
        
    },
    {
        icon: <FontAwesomeIcon icon={faUsers} />,
        id: 5,
        options: "New Group",
        count: 42,
       
    },
    {
        icon: <FontAwesomeIcon icon={faDatabase} />,
        id: 6,
        options: "New Data",
        count: 23,
       
    }
];




// ADDNEWPOST_OTHERUSER_DETAILS

export const OTHER_USER_DATA = [
    {
        profile: OtherUserVirat,
        userName: "Rohit",
        userProfession: "Cricketer",
        createdAt:"1d",
        userMessage: "Kohli had announced before the start of the 2021 season that it would be his last as RCB's captain. His announcement came just days after he had ...",
        id: 1
    },
    {
        profile: OtherUserDhoni,
        userName: "Dhoni",
        userProfession: "Cricketer",
        createdAt:"1d",
        userMessage: "When it was dark, you made it bright and when it was already bright, you made it brighter in a sea of billions, we all consider each one of us ...",
        id: 2
    },
    {
        profile:OtherUserRohit,
        userName: "Rohit",
        userProfession: "Cricketer",
        createdAt:"1d",
        userMessage: "Winning the Asia Cup 7 times. Being the No.1 team. Creating new world records. But there’s no greater pride than hearing 140 crore of fans chanting- “India, India”. So...",
        id: 3
    }
];