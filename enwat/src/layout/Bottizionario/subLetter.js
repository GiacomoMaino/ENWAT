import React from 'react';

import Element from './element';

const BottizionarioSubLetter = ({letter, list}) =>{
    return (
        <>
            <div className="main">
                {letter}
            </div>
            {
                list.map((element) =>{
                    return(
                        <Element prop={element}/>
                    )
                })
            }
        </>
    )
}

export default BottizionarioSubLetter;