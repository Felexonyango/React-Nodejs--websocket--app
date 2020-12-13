import React  from 'react'
import './messages.css';
import Scrolltobottom from 'react-scroll-to-bottom';
import Message from '../message/message'

const Messages =({messages, name})=>(
  
<Scrolltobottom className="messages">
{messages.map((message,i)=>
<div key={i}><Message message={message} name={name}/></div>)}

</Scrolltobottom>
)
export default Messages;