import React, {useState} from "react";
import {
  Container,
} from "semantic-ui-react";

import AccountComponent from "../../components/AccountComponent";

import './style.css'

import Dasboard from '../../components/Dashboard';
import { auth } from "../../helpers/firebase";
import ImageGalleryContainer from "../../containers/Gallery";
import MemesContainer from "../../containers/Memes"
import BottizionarioContainer from "../../containers/Bottizionario";
import CitazioniContainer from "../../containers/Citazioni";

const HomeUI = () => {

  const [content, setContent] = useState(0);

  

  const onDashboardButtonClicked = (e) => {
    console.log(e.target.id);
    setContent(e.target.id);
  }

  return (
    <>
    <div className={"glass"}>
      <Dasboard userName="Giacomo Maino" onButtonClick={onDashboardButtonClicked}/>
      <div className={"content"}>
        {
          {
            1: <p>Pippo</p>,
            2: <ImageGalleryContainer />,
            3: <MemesContainer />,
            4: <BottizionarioContainer />,
            5: <CitazioniContainer />,
            6: <AccountComponent username="Giacomo Maino" user={auth.currentUser}/>
          }[content]
        }
      </div>
    </div>
    <div className={"circle1"}></div>
    <div></div>
    <div className={"circle2"}></div>
    </>
  );
};

export default HomeUI;
