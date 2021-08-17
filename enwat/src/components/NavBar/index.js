import React, { useContext} from "react";
import { Menu, Image, Button, Icon } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/images/logo_transparent.png";
import logout from "../../context/actions/auth/logout";
import { GlobalContext } from "../../context/Provider";
import isAuthenticated from "../../utils/isAuthenticated";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Popup from 'reactjs-popup';
import ModifyDataLayout from '../../layout/Login/modifyPasswordAndEmail';
import 'reactjs-popup/dist/index.css';
import './index.css';

const Header = () => {
  const history = useHistory();

  const { authDispatch: dispatch } = useContext(GlobalContext);

  const handleUserLogout = () => {
    logout(history)(dispatch);
  };

  return (
    <div className={"header"}>
    <Menu secondary pointing >
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <Image as={Link} to='/'src={logo} width={60} />
      <Menu.Item as={Link} to="/" style={{ fontSize: 24, color:"white" }}>
        E.N.W.A.T.
      </Menu.Item>
      </div>
      {isAuthenticated() && (
        <>
        <Menu.Item position="right">
          {" "}
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <Popup trigger={<AccountCircleIcon name="log out" style={{backgroundColor: "#292929",color: "white", marginRight:"0.5rem", width:"3rem", height:"auto"}}></AccountCircleIcon>} modal>
            <div style={{backgroundColor: "#2f2f2f"}}>
              <ModifyDataLayout/>
            </div>
          </Popup>
          </div>
          {" "}
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <Button onClick={handleUserLogout} color="red" basic icon>
            <Icon name="log out"></Icon>
          </Button>
          </div>
        </Menu.Item>
        </>
      )}
    </Menu>
    </div>
  );
};

export default Header;
