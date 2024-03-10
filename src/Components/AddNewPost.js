import DeleteConfirmation from "./DeleteConfirmation";
import { useState } from "react";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../SocialFeedStyles/AddNewPost.scss";
import "../SocialFeedStyles/Attachment.scss";

const AddNewPost = ({
  profile,
  userName,
  userProfession,
  createdAt,
  userMessage,
  userFile,
  userImage,
  userAudio,
  handleDelete,
  keyValue,
  displayPostOptions,
}) => {
  const [isOption, setIsOption] = useState(false);
  const handleIsOption = () => {
    setIsOption(!isOption);
  };

  const [isConfirm, setIsConfirm] = useState(false);
  const handleIsConfirm = () => {
    setIsConfirm(!isConfirm);
  };



  return (
    <div className="post-parent">

      {/* Displays a Delete Confirmation PopUp */}

      {
        isConfirm && (
          <DeleteConfirmation
            isOption={isOption}
            setIsOption={setIsOption}
            isConfirm={isConfirm}
            setIsConfirm={setIsConfirm}
            handleDelete={handleDelete}
            keyValue={keyValue}
          />
        )}

      {/* Adds a new post */}
      <div className="profile-container">
        <div className="user-info">
          <img src={profile} alt="ProfileLogo" className="new-post-img" />
          <div className="user-data">
            <div>{userName}</div>
            <div className="user-profession">{userProfession}</div>
            <div className="post-duration">{createdAt}</div>
          </div>
        </div>


        {/* to display options when elipsis is clicked */}

        {
          displayPostOptions &&
          <div className="post-options">
            <FontAwesomeIcon icon={faEllipsis} className="post-ellipsis-icon" size="lg" onClick={handleIsOption} />


            <div className="delete-box">
              {displayPostOptions && isOption && (
                <input
                  type="button"
                  value="Delete"
                  className="post-option-buttons"
                  onClick={handleIsConfirm}
                />
              )}

            </div>
          </div>
        }
      </div>

      {/*Responsible to displaying userMessage,userFiles,userImage,userAudio*/}

      <div className="user-content">
        <pre className="post-message">{userMessage}</pre>
        {userFile && <img src={userFile} className="user-file" alt="upload-file" />}
        {userImage && <img src={userImage} className="user-file" alt="upload-image" />}
        {userAudio && <audio src={userAudio} controls className="upload-audio" />}
      </div>
    </div>
  );
};

export default AddNewPost;
