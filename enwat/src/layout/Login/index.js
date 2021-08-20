import React, {useState, useEffect} from "react";

import logo from "../../assets/images/logo_transparent.png"

import "./index.css"
import LoginForm from "../../components/LoginForm";



const LoginUI = ({
  form,
}) => {

  return (
    <div style={{display: "flex", alignContent:"center", justifyContent: "ceneter"}}>
      <div className={"glass"}>
        <div className={"login-container"}>
          <img src={logo} style={{height: "auto", maxWidth:"50%"}}/>
          <LoginForm form={form}/>
        </div>
    </div>
    </div>
  );
};

export default LoginUI;
