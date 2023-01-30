import { useState, useEffect } from "react";
import moment from "moment/moment";
import MessageBox from "./Components/MessageBox";
import AddNewPost from "./Components/AddNewPost";
import "./SocialFeedStyles/FeedList.scss";
import { OTHER_USER_DATA, USER_PROFILE } from "./Components/SocialFeedData";
import { useRef } from "react";

const FeedList = ({incPostsCount}) => {
  const [currentUserData, setCurrentUserData] = useState([]);
  const LOCAL_STORAGE_NAME = "userNewPost";
  let COUNTVAL=useRef(0);

  const addItemToStorage = (receivedData) => {
    setCurrentUserData([
      {
        createdAt: moment().format(),
        userMessage: receivedData.userMessageAdded,
        userFile: receivedData.userUploadedFile,
        userWebCamImage:receivedData.userWebCamImage,
        userAudio:receivedData.userRecAudio,
        id: new Date().getTime(),
      },
      ...currentUserData,
    ]);
    


  };

  useEffect(() => {
    
    if (localStorage.getItem(LOCAL_STORAGE_NAME)) {
      setCurrentUserData(JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME)));}
      
  }, []);


  //updating to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(currentUserData));
    COUNTVAL=currentUserData.length;
    incPostsCount(COUNTVAL);
  }, [currentUserData]);


  
  const handleDelete = (id) => {
    const NEW_USER_DATA = currentUserData.filter((dlt) => dlt.id !== id);
    setCurrentUserData(NEW_USER_DATA);
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(NEW_USER_DATA));
  };

  

  return (
    <section>
      <div className="right-panel">
        <MessageBox addItemToStorage={addItemToStorage} />

        {currentUserData.map((postDetail) => (
         
            <AddNewPost
              profile={USER_PROFILE}
              userName="KL Rahul"
              userProfession="Cricketer"
              userMessage={postDetail.userMessage}
              createdAt={moment(postDetail.createdAt).fromNow()}
              key={postDetail.id}
              keyValue={postDetail.id}
              handleDelete={handleDelete}
              displayPostOptions={true}
              userFile={postDetail.userFile}
              userImage={postDetail.userWebCamImage}
              userAudio={postDetail.userAudio}
            />
          
        ))}

        {OTHER_USER_DATA.map((postDetail) => 
          
            <AddNewPost
              profile={postDetail.profile}
              userName={postDetail.userName}
              userProfession={postDetail.userProfession}
              userMessage={postDetail.userMessage}
              createdAt={postDetail.createdAt}
              key={postDetail.id}
            />
         
        )}
      </div>
    </section>
  );
};

export default FeedList;
