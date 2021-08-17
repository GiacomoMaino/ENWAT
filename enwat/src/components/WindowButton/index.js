import React from 'react'

import {Link} from "react-router-dom"

import "./index.css"

const displayContent = (content, isPhoto) =>{
    if(isPhoto)
        return(<img src={content}/>)
    return(<p>{content}</p>)
}

const WindowButton = ({
    userDoc, content, title, color, src, isPhoto, className
}) => {
    return(<div className={"mainButton " + className} >
        <Link to={src} >
        <div style={{color: 'black'}}>
            <h3>{title}</h3>
            <div className={"windowOfButton"}>
                {displayContent(content=content, isPhoto=isPhoto)}
            </div>
        </div>
        </Link>
    </div>)
}

export default WindowButton;