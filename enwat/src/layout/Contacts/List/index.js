import React from "react";
import {
  Container,
} from "semantic-ui-react";

import {ButtonLink as Button}  from './buttons'

import './style.css'

import AppHeader from "../../../components/Header";

const HomeUI = () => {

  return (
    <div>
      <AppHeader />
      <Container>
          <Button text="EMERGENZA FESTA" variant="outline-danger" className={Math.random() < 0.5? "btn home plain fucsia" : "btn home fucsia"} disabled={true}/>

          <Button text="RICORDI" variant="outline-success" className={Math.random() < 0.5? "btn home plain green" : "btn home green"} src="/ricordi"/>

          <Button text="MEME" src="/memes" variant="outline-primary" className={Math.random() < 0.5? "btn home plain lightblue" : "btn home lightblue"}/>

          <Button text="BOTTIZIONARIO" variant="outline-primary" className={Math.random() < 0.5? "btn home plain blue" : "btn home blue"} src="/bottizionario"/>

          <Button text="CITAZIONI" src="/citazioni" variant="outline-warning" className={Math.random() < 0.5? "btn home plain yellow" : "btn home yellow"}/>

      </Container>
    </div>
  );
};

export default HomeUI;
