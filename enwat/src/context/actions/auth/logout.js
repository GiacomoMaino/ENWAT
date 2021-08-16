import { LOGOUT_USER } from "../../../constants/actionTypes";
import {auth} from '../../../helpers/firebase'

export default (history) => (dispatch) => {
  auth.signOut().then(() => {
    dispatch({
    type: LOGOUT_USER,
    data: null,
  });
  history.push("/auth/login");
}).catch((error) => console.log("problems signing out"));
};
