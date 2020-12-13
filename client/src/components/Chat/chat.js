import React,{useState,useEffect} from 'react';
import queryStrig from 'query-string';
import io from 'socket.io-client';
import './chat.css'
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/messages'
let socket; 

const Chat=({location})=>{
    const[name,setName]=useState('')
    const [room,setRoom]=useState('')
    const[message,setMessage]=useState('')
    const[messages,setMessages]=useState([])
    const ENDPOINT='localhost:5000'

    useEffect(()=>{
const {name,room} =queryStrig.parse(location.search)
  socket=io(ENDPOINT);
  setName(name);
  setRoom(room)
socket.emit('join',{name,room},()=>{
//Error function 

})
return ()=>{
   
    socket.disconnect(true)
    
}
    },[ENDPOINT, location.search])
    useEffect(()=>{

         socket.on('message',(message)=>{
            setMessages([...messages,message])

        })
    },[messages])

    const sendMessage=(e)=>{
        e.preventDefault()

        if(message){
            socket.emit('sendMessage',message,()=>setMessage(''))
        }
    }
    console.log(messages,message)
    return(
        <div  className="outerContaier">
         <div  className="container">
             <InfoBar room={room}/>
             <Messages messages={messages}/>
              <Input  message={message}setMessage={setMessage}sendMessage={sendMessage}/>
         </div>
        </div>
    )

}
export default Chat