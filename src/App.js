import {useState } from "react";
import NavigationBar from "./NavigationBar";
import SideBar from "./SideBar";
import FeedList from "./FeedList";
import "./App.scss";
import moment from "moment/moment";

const App = () => {

    const [isToggle, setIsToggle] = useState(false);
    const isHamburgerActive = () => {
        setIsToggle(!isToggle);
    }

    const [postsCount,setPostsCount]=useState("");

    const incPostsCount=(countUpdated)=>{
        setPostsCount(countUpdated);
    }
    // let i=moment.format();
    return (     

        <>
            <NavigationBar isHamburgerActive={isHamburgerActive}/>
            <SideBar hamBurgerMenuStatus={isToggle} postsCount={postsCount}/>
            <FeedList incPostsCount={incPostsCount}/>
        </>  
               
    );
}

export default App;