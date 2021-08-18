import React, { useContext} from "react";
import {useHistory } from "react-router-dom";
import logout from "../../context/actions/auth/logout";
import { GlobalContext } from "../../context/Provider";
import PartyIcon from "../../assets/images/icons/balloons.png"
import AccountIcon from "../../assets/images/icons/student-card.png"
import BottizionarioIcon from "../../assets/images/icons/book.png"
import CitazioniIcon from "../../assets/images/icons/book-quotes.png"
import MemeIcon from "../../assets/images/icons/panic.png"
import RicordiIcon from "../../assets/images/icons/friendly.png"
import LogoutIcon from "../../assets/images/icons/logout.png"
import 'reactjs-popup/dist/index.css';
import './index.css';

const Dashboard = ({userName, userAvatar}) => {
  const history = useHistory();

  const { authDispatch: dispatch } = useContext(GlobalContext);

  const handleUserLogout = () => {
    logout(history)(dispatch);
  };

  return (
    <div className={"dashboard"}>
      <div className={"userSection"}>
        <img src={userAvatar}/>
        <h3>{userName}</h3>
      </div>
      <div className={"menu"}>
        <div className={"option"}>
          <img src={PartyIcon} className={"icon"}/>
          <h2>Emergenza Festa</h2>
        </div>
        <div className={"option"}>
        <img src={RicordiIcon} className={"icon"}/>
          <h2>Ricordi</h2>
        </div>
        <div className={"option"}>
        <img src={MemeIcon} className={"icon"}/>
          <h2>Meme</h2>
        </div>
        <div className={"option"}>
          <img src={BottizionarioIcon} className={"icon"}/> 
          <h2>Bottizionario</h2>
        </div>
        <div className={"option"}>
        <img src={CitazioniIcon} className={"icon"}/>
          <h2>Citazioni</h2>
        </div>
        <div className={"option"}>
          <img src={AccountIcon} className={"icon"}/>
          <h2>Account</h2>
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
