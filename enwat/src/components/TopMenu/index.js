import React from 'react'

import BackIcon from "../../assets/images/icons/back.png"

import './index.css'

const TopMenu = ({onClick}) => {
    return(
        <div className={"topmenu"} id="none" onClick={onClick}>
            <img src={BackIcon} id ="0"/>
        </div>
    )
}

export default TopMenu;