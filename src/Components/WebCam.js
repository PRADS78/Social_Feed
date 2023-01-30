import React, { useState, useRef, useEffect } from 'react';
import Webcam from "react-webcam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../SocialFeedStyles/WebCam.scss";

const WebCam = ({ AttachmentIcon, AttachmentText, getImage, closeCam, getIsDirection }) => {

    const [camOpen, setCamOpen] = useState(false);
    const [image, setImage] = useState('');

    const webcamRef = useRef(0);

    const capture = (() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
        getImage(imageSrc);
    });

    useEffect(() => {
        setImage("");
        setCamOpen(false);
    }, [closeCam]
    );

    // const setDefaultState = () => {
        
    // }

    return (
        <div >

            { <div className="webcam-parent" onClick={() => { setCamOpen(true); }}>
                <FontAwesomeIcon icon={AttachmentIcon} className="attachment-icon" onClick={() => { getIsDirection(true) }} />
                <span className="attachment-text" onClick={() => { getIsDirection(true) }}>{AttachmentText}</span>
            </div>

            }


            {camOpen && <div className="webcam-preview">
                <div className="capture-img">
                    {image === '' ? <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" height={123} width={164} className="preview-styles" /> : <img src={image} alt="" />}
                    <div className='capture-btn'>
                        {image !== '' ? <button onClick={(e) => { e.preventDefault(); setImage('') }} className="webcam-btn"> Retake Image</button>
                            :
                            <button onClick={(e) => { e.preventDefault(); capture(); }} className="webcam-btn">Capture</button>
                        }
                    </div>
                </div>


                <div>
                    {camOpen &&
                        <FontAwesomeIcon icon={faXmark} onClick={() => { setCamOpen(false); setImage(""); getIsDirection(false) }} className="close-webcam" />
                    }
                </div>

            </div>
            }
        </div>
    );
};

export default WebCam;