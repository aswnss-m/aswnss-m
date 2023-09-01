import React, { useEffect } from 'react';
import '../Assets/styles/Card3d.css';
import node from '../Assets/icons/Node.svg';
import react from '../Assets/icons/React.svg';
import python from '../Assets/icons/Python.svg';
import figma from '../Assets/icons/Figma.svg';
import github from '../Assets/icons/Github.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Card3d({props}) {
    const [status , setStatus] = useState(props.status)
    const [tech, setTech] = useState(props.tech)
    useEffect(()=>{
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
        } else if(tech === 'github'){
            setTech(github)
        }
        else{
            setTech(null)
        }
    },[])
  return (
    <div className="card-container">
      <Link to={props.link}>
      <div className="bottom-card">
        <p>{props.title}</p>
      </div></Link>
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
