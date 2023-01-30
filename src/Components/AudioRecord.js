import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ReactMediaRecorder } from "react-media-recorder";
import {useState,useEffect} from "react";
import "../SocialFeedStyles/AudioRecord.scss"

function AudioRecord({ AttachmentIcon, AttachmentText,getAudio,closeAudio,getIsDirection }) {

  const [micOpen, setMicOpen] = useState(false);

  useEffect(()=>{
  setMicOpen(false);
 },[closeAudio]);



  return (
    <div>
      {<div className="audio-rec-component" onClick={()=>{setMicOpen(true);}}>
        <FontAwesomeIcon icon={AttachmentIcon} className="attachment-icon" onClick={()=>{getIsDirection(true)}}/>
        <span className="attachment-text" onClick={()=>{getIsDirection(true)}}>{AttachmentText}</span>
      </div>
      }

      {
      micOpen&&
        <ReactMediaRecorder
        onStop={(blobUrl, blob)=>{  var reader = new FileReader();
          reader.readAsDataURL(blob); 
          reader.onloadend = function() {
            var base64data = reader.result;
            getAudio(base64data);        
          }}}
          audio
          render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
            <div className="audio-parent">          
             
              <div className="audio-rec">
              <audio src={mediaBlobUrl} controls className="audio-tag-style" />
              <div className="btn-controls">
              <button onClick={startRecording} className="audio-btn btn-color1">Start</button>
              <button onClick={stopRecording} className="audio-btn btn-color2">Stop</button>
              </div>
              {(status!=='idle')?<p className="status">{status}</p>:''}
              {(status==="recording")&&<p className="status">{`"Click stop before Posting"`}</p>}
            </div>
            <FontAwesomeIcon icon={faXmark} onClick={() => { setMicOpen(false);getIsDirection(false) }} className="close-media-rec" />
           </div>
          )}
        />
        
      }
      </div>
  );
}

export default AudioRecord;