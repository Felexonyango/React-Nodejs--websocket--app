import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import '../Join/join.css'
const JOin=()=>{
    const[name,setName]=useState('')
    const [room,setRoom]=useState('')
    return(
        <div className="joinOuterContainer">
            <div className="joinInnercontainer">
                <h1 className="heading">Join</h1>
                
                <div>
                <label>Name</label>
                    <input placeholder=""className="joinInput"type="text"onChange={(e)=>setName(e.target.value)}/>
                </div>
                < br/>
                <div>
                    <label>Room</label>
                    <input placeholder=""className="joinInput  mt-20"type="text"onChange={(e)=>setRoom(e.target.value)}/>
                </div>
                <Link onClick={e=>(!name||!room)? e.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                <button className="button mt-20"type="submit">Sign In</button>
                </Link>
            </div>
            
        </div>
    )

}
export default  JOin
