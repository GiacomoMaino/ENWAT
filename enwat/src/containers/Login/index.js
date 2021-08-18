import React from "react";

import LoginUI from "../../layout/Login";
import useForm from "./useForm";

const LoginContainer = () => {
  console.log("Pippo");
  return <LoginUI form={useForm()} />;
};

export default LoginContainer;
