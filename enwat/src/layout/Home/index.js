import React from "react";
import {
  Container,
} from "semantic-ui-react";

import {ButtonLink as Button}  from './buttons'

import './style.css'


import WindowButton from "../../components/WindowButton";

const HomeUI = () => {

  return (
    <>
    <div className={"glass"}>
          <Button text="EMERGENZA FESTA" variant="outline-danger" className={Math.random() < 0.5? "btn home plain fucsia" : "btn home fucsia"} disabled={true}/>

          <WindowButton className={"orange"} title="Ricordi"  isPhoto={true}/>

          <WindowButton className={"blue"} title="Meme" isPhoto={true} />

          <WindowButton className={"yellow"} title="Bottizionario" isPhoto={false} content="Ciao"/>

          <WindowButton className={"green"} title="Citazioni" isPhoto={false}/>

          <WindowButton className={"salmon"} title="SushiList"/>
    </div>
    <div className={"circle1"}></div>
    <div className={"circle2"}></div>
    </>
  );
};

export default HomeUI;
