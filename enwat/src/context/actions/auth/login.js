import {auth, firebase } from "../../../helpers/firebase";
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "../../../constants/actionTypes";


export const askPasswordChange = ({ password, username }) => (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });
  auth.sendPasswordResetEmail(username).then(function() {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: 'sent',
    });
  }).catch(function(error) {
    console.log(error);
    dispatch({
      type: LOGIN_ERROR,
      payload: error.message,
    });
  });
}

export const login = ({ password, username }) => (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });
  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() =>{
    auth.signInWithEmailAndPassword(username, password)
  .then(() => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: 'Logged in',
      })
    }).catch((err) =>{
      console.log(err.message);
      dispatch({
        type: LOGIN_ERROR,
        payload: err.message,
      });
    })
  }).catch((err) =>{
      console.log(err.message);
      dispatch({
        type: LOGIN_ERROR,
        payload: err.message,
      });
  });
}
