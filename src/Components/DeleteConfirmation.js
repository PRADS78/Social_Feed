
import "../SocialFeedStyles/DeleteConfirmation.scss";
function DeleteConfirmation({isConfirm,setIsConfirm,handleDelete,keyValue,setIsOption,isOption}) {


  return (
    <div className="pop-up-overlay" onClick={()=>{
     
      
      // console.log(e);
      setIsConfirm(false);
      // setIsOption(false);
    
  }}  >
        <div className="pop-up-box" onClick={(e)=> e.stopPropagation() }>
            <div className="confirm-text">Do you want to Delete?</div>
            <div className="confirmation-btns">
            <button className='btn cancel-btn' onClick={()=>{setIsConfirm(!isConfirm);
            setIsOption(!isOption)}}>Cancel</button>
            <button className='btn remove-btn' onClick={()=>{handleDelete(keyValue)}}>Remove</button>
            </div>
            
        </div>
    </div>
  )
}

export default DeleteConfirmation;