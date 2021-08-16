import React from 'react';
import {ListGroup} from 'react-bootstrap';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

const BottizionarioElement = (list) =>{
    const words = list.list;

    console.log(list);
    return(
        <>
            {
                words.map((item, key) => {
                    return(
                            <ListGroup.Item style={{color: 'black', fontSize:'1.2rem'}} key={key}>
                                {item.botti} <SwapHorizIcon/> {item.italiano}
                            </ListGroup.Item>
                    )
                })
            }
        </>
    )
}

export default BottizionarioElement;