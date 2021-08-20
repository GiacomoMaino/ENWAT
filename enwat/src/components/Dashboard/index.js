import React, { useContext} from "react";
import {useHistory } from "react-router-dom";
import logout from "../../context/actions/auth/logout";
import { GlobalContext } from "../../context/Provider";
import PartyIcon from "../../assets/images/icons/balloons.png";
import AccountIcon from "../../assets/images/icons/student-card.png";
import BottizionarioIcon from "../../assets/images/icons/book.png";
import CitazioniIcon from "../../assets/images/icons/book-quotes.png";
import MemeIcon from "../../assets/images/icons/panic.png";
import RicordiIcon from "../../assets/images/icons/friendly.png";
import LogoutIcon from "../../assets/images/icons/logout.png";
import 'reactjs-popup/dist/index.css';
import './index.css';

const Dashboard = ({userData, userAvatar, onButtonClick}) => {
  const history = useHistory();

  console.log(userData);

  const { authDispatch: dispatch } = useContext(GlobalContext);

  const handleUserLogout = () => {
    logout(history)(dispatch);
  };

  return (
    <div className={"dashboard"}>
      <div className={"userSection"}>
        <img src={userAvatar}/>
        <h3>{userData.username}</h3>
      </div>
      <div className={"menu"}>
        <div className={"option"} onClick={onButtonClick} id="1">
          <img src={PartyIcon} className={"icon"} id="1"/>
          <h2 id="1">Emergenza Festa</h2>
        </div>
        <div className={"option"} id="2" onClick={onButtonClick}>
        <img src={RicordiIcon} className={"icon"} id="2"/>
          <h2 id="2">Ricordi</h2>
        </div>
        <div className={"option"} id="3" onClick={onButtonClick}>
        <img src={MemeIcon} className={"icon"} id="3"/>
          <h2 id="3">Meme</h2>
        </div>
        <div className={"option"} id="4" onClick={onButtonClick}>
          <img src={BottizionarioIcon} className={"icon"} id="4"/> 
          <h2 id="4">Bottizionario</h2>
        </div>
        <div className={"option"} id="5" onClick={onButtonClick}>
        <img src={CitazioniIcon} className={"icon"} id="5"/>
          <h2 id="5">Citazioni</h2>
        </div>
        <div className={"option"} id="6" onClick={onButtonClick}>
          <img src={AccountIcon} className={"icon"} id="6"/>
          <h2 id="6">Account</h2>
        </div>
        <div className={"option"} onClick={handleUserLogout}>
        <img src={LogoutIcon} className={"icon"}/>
          <h2>Logout</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
