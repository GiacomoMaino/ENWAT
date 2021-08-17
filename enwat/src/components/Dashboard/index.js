import React, { useContext} from "react";
import { Menu, Image, Button, Icon } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/images/logo_transparent.png";
import logout from "../../context/actions/auth/logout";
import { GlobalContext } from "../../context/Provider";
import isAuthenticated from "../../utils/isAuthenticated";
import FilterRoundedIcon from '@material-ui/icons/FilterRounded';
import SentimentVerySatisfiedRoundedIcon from '@material-ui/icons/SentimentVerySatisfiedRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ClassRoundedIcon from '@material-ui/icons/ClassRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import AnnouncementRoundedIcon from '@material-ui/icons/AnnouncementRounded';
import Popup from 'reactjs-popup';
import ModifyDataLayout from '../../layout/Login/modifyPasswordAndEmail';
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
          <img src=""/>
          <h2>Emergenza Festa</h2>
        </div>
        <div className={"option"}>
          <FilterRoundedIcon/>
          <h2>Ricordi</h2>
        </div>
        <div className={"option"}>
          <SentimentVerySatisfiedRoundedIcon />
          <h2>Meme</h2>
        </div>
        <div className={"option"}>
          <ClassRoundedIcon/>
          <h2>Bottizionario</h2>
        </div>
        <div className={"option"}>
          <AnnouncementRoundedIcon />
          <h2>Citazioni</h2>
        </div>
        <div className={"option"}>
          <AccountCircleIcon/>
          <h2>Account</h2>
        </div>
        <div className={"option"}>
          <ExitToAppRoundedIcon />
          <h2>Logout</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
