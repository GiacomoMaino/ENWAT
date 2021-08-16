import React from 'react';

import {Card, CardColumns} from 'react-bootstrap';

const LayoutCitazioni = (entries) =>{
    const data = entries.entries;

    return(
        <>
            <CardColumns>
                {
                    data.map((item, index) =>{
                        return(
                            <>
                                <Card>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0" style={{color: "black"}}>
                                            <p>
                                                {' '}
                                                {item.contenuto}{' '}
                                            </p>
                                        </blockquote>
                                        <footer className="blockquote-footer">
                                            <cite title="Source Title">
                                                {item.autore}
                                            </cite>
                                        </footer>
                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })
                }
            </CardColumns>
        </>
    )
    
}

export default LayoutCitazioni;