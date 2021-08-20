import React from "react";
import logo from "../../assets/images/logo_transparent.png"

import './index.css'

import {auth} from "../../helpers/firebase"

import LoginForm from "../../components/LoginForm";
import { useHistory } from "react-router-dom";

const RetreivePasswordUI = ({
  form}) => {
   const history = useHistory();
   var newForm = form;
   newForm.onSubmit = () => {console.log(auth.currentUser); form.onPasswordResetSubmit(); history.push("/auth/login")}
   

  return (
   <div style={{display: "flex", alignContent:"center", justifyContent: "ceneter"}}>
   <div className={"glass"}>
     <div className={"login-container"}>
       <img src={logo} style={{height: "auto", maxWidth:"50%"}}/>
       <LoginForm form={form} emailOnly="true" title="Recupero Password" buttonText="Recupera"/>
     </div>
 </div>
 </div>
  );
};

export default RetreivePasswordUI;
