import React, { useEffect } from 'react';
import '../Assets/styles/Card3d.css';
import node from '../Assets/icons/Node.svg';
import react from '../Assets/icons/React.svg';
import python from '../Assets/icons/Python.svg';
import figma from '../Assets/icons/Figma.svg';
import { useState } from 'react';

function Card3d({props}) {
    console.log(props)
    const [status , setStatus] = useState(props.status)
    const [tech, setTech] = useState(props.tech)
    useEffect(()=>{
        console.log(status)
        if (status === 'online'){
            setStatus('status-badge active')
        }
        else if(status === 'offline'){
            setStatus('status-badge inactive')
        }else{
            setStatus('status-badge progress')
        }
        if(tech === 'node'){
            setTech(node)
        }else if(tech === 'react'){
            setTech(react)
        }else if(tech === 'python'){
            setTech(python)
        }else if (tech ==='figma'){
            setTech(figma)
        }
        else{
            setTech(null)
        }
    },[])
  return (
    <div className="card-container">
      <div className="bottom-card">
        <h4>{props.title}</h4>
      </div>
      <div className="middle-card">
        <span className={status}></span>
        <p>{props.status}</p>
      </div>
      <div className="top-card">
        <img src={tech} alt="Node" />
      </div>
    </div>
  );
}

export default Card3d;
