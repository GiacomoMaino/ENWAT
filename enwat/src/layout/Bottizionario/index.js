import React from 'react';

import Letters from '../../constants/letters';
import Elements from './elements'

import {
    Container,
  } from "semantic-ui-react";

import {Card, Accordion, ListGroup} from 'react-bootstrap'

import './index.css'

const LayoutBottizionario = (props) =>{
    const list = props.list;

    const getAllThatStarts = (character) => {
        var vect = [];
        list.forEach(element => {
            if(element.botti[0] === character)
                vect.push(element);
        });
        return vect;
    }

    const generateList = () => {
        var list = [];
        Letters.forEach((letter) =>{
            list.push({letter: letter, elements: getAllThatStarts(letter)})
        })
        return list;
    }

    return(
        <Container centered>
            {generateList().map((item, index) => {
                if(item.elements.length > 0)
                return (
                    <div style={{display: 'block', textAlign: "center"}} key={index}>
                        
                        <Accordion className='main'>
                            <Accordion.Toggle as={Card.Header} eventKey={index+1}>
                                {item.letter}    
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={index+1}>
                            <Card>
                                <ListGroup>
                                    <Elements list={item.elements} />
                                </ListGroup>
                            </Card>
                            </Accordion.Collapse>
                        </Accordion>
                    </div>
                )
                
            })}
        </Container>
    )
};

export default LayoutBottizionario;