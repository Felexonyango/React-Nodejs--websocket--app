import React  from 'react'
import './message.css';
import ReactEmoji from 'react-emoji';

const Message =({message:{user,text}, name})=>{
let isSentByCUrrentUser=false;
const trimedName=name.trim().toLowercase()
if(user===trimedName){

    isSentByCUrrentUser=true
}
return(

isSentByCUrrentUser
?(
    <div className="messageContainer justfyEnd">

<p className="setText pr-10">{trimedName}</p>
<div className="messageBox backgroundBlue">
<p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>

</div>

    </div>


):(

    <div className="messageContainer justfyStart">

    <p className="setText ">{trimedName}</p>
    <div className="messageBox  backgroundLight">
    <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
    </div>
<p className="sentMesage pl-10" >{user}</p>
    
        </div>

)
)




}
export default Message;