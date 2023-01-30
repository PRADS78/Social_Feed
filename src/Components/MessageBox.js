import { useState,useEffect } from "react";
import {faPaperclip,faCamera,faMicrophone} from "@fortawesome/free-solid-svg-icons";
import AddAttachment from "./AddAttachment";
import WebCam from "./WebCam";
import AudioRecord from "./AudioRecord";
import TextareaAutosize from "react-textarea-autosize";
import { USER_PROFILE } from "./SocialFeedData";
import "../SocialFeedStyles/MessageBox.scss";


const MessageBox = ({ addItemToStorage }) => {

  const [isAttachmentClicked,setIsAttachmentClicked]=useState(false);
  const [viewPostButton,setViewPostButton]=useState(true);
  
  const [userMessageAdded, setUserMessageAdded] = useState("");
  const [userUploadedFile, setUploadedFile] = useState("");
  const [userWebCamImage, setUserWebCamImage] = useState("");
  const [userRecAudio,setUserRecAudio]=useState("");
  const [isSubmitted,setIsSubmitted]=useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (userMessageAdded.replace(/\s/g, " "))  || userUploadedFile !== ""|| userWebCamImage!==""||userRecAudio!=="") 
      {
    addItemToStorage({ userMessageAdded, userUploadedFile,userWebCamImage,userRecAudio });
    setUserMessageAdded("");
    setUploadedFile("");
    setUserWebCamImage("");
    setUserRecAudio("");
    setIsSubmitted(!isSubmitted);
      }
      else {alert("Please Give Some Input!!!🙂");
            setUserMessageAdded("");}
  };



  const handleFile = (uploadedFile) => {
    setUploadedFile(uploadedFile);
  };

  const handleCapture = (capturedImage) => {
    setUserWebCamImage(capturedImage);
  };

  const handleAudio=(recordedAudio)=>{
    setUserRecAudio(recordedAudio);
  }

  const isAttachment=(received)=>{
    setIsAttachmentClicked(received);
  }

  useEffect(() => {
    
  if(userMessageAdded.length>0&&userMessageAdded.replace(/\s/g, "")|| userUploadedFile !== ""|| userWebCamImage!==""||userRecAudio!==""){
              setViewPostButton(false);
            }
    else{
      setViewPostButton(true);
    }
  }, [userMessageAdded,userUploadedFile,userWebCamImage,userRecAudio])
  

  return (
    <div className="message-box-parent">
      <div className="message-area">

      {/* userImage */}
        <img src={USER_PROFILE} alt="profile" className="messagebox-profile" />

       {/* InputArea */}
        <form className="post-form" onSubmit={handleSubmit}>
          <TextareaAutosize
          className="input-text-area"
          maxRows={6}
          value={userMessageAdded}
          placeholder="Share something here..."
          onChange={(e)=>{ 
            setUserMessageAdded(e.target.value);
            
          
          }}
          />
          <button type="submit" className={`submit-button ${viewPostButton&&"submit-button-blur"}`} onClick={()=>{setIsAttachmentClicked(false)}}>Post</button>
        </form>
      </div>


      {/* attachment area */}
      <div className={`attachment-parent ${isAttachmentClicked && "attachment-direction"}`} >
        <AddAttachment AttachmentIcon={faPaperclip} AttachmentText="Any attachment" getFile={handleFile} closeFile={isSubmitted} getIsDirection={isAttachment}/>
        <WebCam AttachmentIcon={faCamera} AttachmentText="Capture it" getImage={handleCapture} closeCam={isSubmitted} getIsDirection={isAttachment}/>
        <AudioRecord AttachmentIcon={faMicrophone} AttachmentText="Say it" getAudio={handleAudio} closeAudio={isSubmitted} getIsDirection={isAttachment} />
      </div>

    </div>
  );
};

export default MessageBox;