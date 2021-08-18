import React, {useState, useEffect} from "react";

import logo from "../../assets/images/logo_transparent.png"

import "./index.css"
import LoginForm from "../../components/LoginForm";



const LoginUI = ({
  form,
}) => {

  return (
    <div style={{display: "flex", justifyContent: 'center', alignContent: 'center'}}>
      <div className={"glass"} style={{display: "flex", justifyContent: 'center', alignContent: 'center', textAlign: "center"}}>
      <div>
        <img src={logo} style={{maxHeight: "30vh", width:"auto"}}/>
         <LoginForm form={form}/>
      </div>
     </div>
    </div>
  );
};

export default LoginUI;
