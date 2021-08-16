import React from "react";
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom"

import './buttons.css'

const ButtonLink = ({
    src = '',
    text = '',
    variant = '',
    className = '',
    disabled = false
}) =>  {

    const generateLink = () => {
        if(!disabled)
            return(<Link to={src} className={className} style={{width: '100%', height:'100%', padding: 0, margin: 0, border: 0,}}>
            {text}
            </Link>)
        else
            return(
                text
            )
    }

    return(
        <div style={{display: 'flex', justifyContent: 'center'}} >
        <Button className={className} variant={variant} size="lg" block style = {{margin:'10px 0px 10px 0px'}} disabled={disabled}>
            {generateLink()}
          </Button>
        </div>
    )

};


export {ButtonLink};