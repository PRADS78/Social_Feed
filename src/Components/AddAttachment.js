import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState,useEffect } from "react";
import "../SocialFeedStyles/AddAttachment.scss";

const Attachment = ({ AttachmentIcon, AttachmentText,getFile,closeFile,getIsDirection }) => {
   

const [img,setImage]=useState("");

  const uploadImage = (e) => {
    const file = e.target.files[0];
    e.target.value = null;
    const fileReader = new FileReader();
    fileReader.onloadend =() =>{
      setImage(fileReader.result);
      getFile(fileReader.result);
    };      
    fileReader.readAsDataURL(file);

  };


    useEffect(()=>{
          setDefaultState();
       },[closeFile]
       );
  
       const setDefaultState=()=>{
          setImage("");
       }


       

    return (
        
        <div className="file-parent">
        <label htmlFor="upload-file" className="add-attachments" onClick={()=>{
          getIsDirection(true)
        }}>
        <FontAwesomeIcon icon={AttachmentIcon} className="attachment-icon" />
        <span className="attachment-text">{AttachmentText}</span>
        <div className="files-upload">
        <input type="file" id="upload-file" name="images" onChange={uploadImage} accept="image/png , image/jpeg"/>
        </div>
        </label>

        {img&&
        <div className="file-preview">
          <img src={img} alt="" className="preview-img"/>
          <FontAwesomeIcon icon={faXmark} className="close-file" onClick={()=>{setImage("");getIsDirection(false)}}/>
        </div>
        }
        </div>
        
        
    );
}

export default Attachment;

