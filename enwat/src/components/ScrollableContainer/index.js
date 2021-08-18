import React from 'react'

const ScrollableContainer = ({children}) => {
    return(<div className={"scrollable"}>
        {children}
    </div>);
}

export default ScrollableContainer;