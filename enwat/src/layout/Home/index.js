import React from "react";
import {
  Container,
} from "semantic-ui-react";


import './style.css'

import Dasboard from '../../components/Dashboard';

const HomeUI = () => {

  return (
    <>
    <div className={"glass"}>
      <Dasboard userName="Giacomo Maino"/>
      <div className={"content"}>
      </div>
    </div>
    <div className={"circle1"}></div>
    <div></div>
    <div className={"circle2"}></div>
    </>
  );
};

export default HomeUI;
