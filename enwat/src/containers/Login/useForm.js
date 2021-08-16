import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../context/Provider";
import { useHistory } from "react-router-dom";
import { login, askPasswordChange } from "../../context/actions/auth/login";
import { auth } from "../../helpers/firebase"
import {isValidEmail, isValidPassword} from '../../utils/isValid'

export default () => {
  const [form, setForm] = useState({});

  const history = useHistory();

  const {
    authDispatch,
    authState: {
      auth: { loading, error, data },
    },
  } = useContext(GlobalContext);


  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };


  const loginFormValid = !isValidEmail(form.username) || !isValidPassword(form.password);

  const passwordFormValid = !form.username?.length;

  const onSubmit = () => {
    // register(form)(authDispatch);

    login(form)(authDispatch);
  };

  const onPasswordResetSubmit = () =>{
    askPasswordChange(form)(authDispatch);
  }

  useEffect(() => {
    if (data) {
      if (auth.currentUser !== null) {
        history.push("/");
      }
    }
  }, [data]);

  return { form, onChange, loading, error, loginFormValid, onSubmit, onPasswordResetSubmit, passwordFormValid };
};
