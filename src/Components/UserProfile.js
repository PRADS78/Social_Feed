import "../SocialFeedStyles/UserProfile.scss";

const UserProfile = ({ currentUserImg, currentUserName }) => {
    return (
        <div className="user-profile-parent">
            <img src={currentUserImg} alt="profile" className="user-img"/>
            <span className="user-name">{currentUserName}</span>
        </div>
    );
}

export default UserProfile;