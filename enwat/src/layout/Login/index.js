import React, {useState, useEffect} from "react";

import logo from "../../assets/images/logo_transparent.png"

import {Link} from 'react-router-dom'
import "./index.css"



const LoginUI = ({
  form: { onChange, form, loginFormValid, error, onSubmit, loading },
}) => {

  return (
    <div style={{display: "flex", justifyContent: 'center', alignContent: 'center'}}>
      <div className={"glass"} style={{display: "flex", justifyContent: 'center', alignContent: 'center', textAlign: "center"}}>
      <div>
        <img src={logo} style={{maxHeight: "30vh", width:"auto"}}/>
      <div className={"wrapper"}>
         <div className={"title"}>
            Login Form
         </div>
         <form>
            <div className={"field"}>
               <input type="text" value={form.username || ""} required onChange={onChange} name="username"/>
               <label>Indirizzo Email</label>
            </div>
            <div className={"field"}>
               <input type="password" value={form.password || ""} required onChange={onChange} name="password"/>
               <label>Password</label>
            </div>
            <div className={"content"}>
              {/*
               <div className="checkbox">
                  <input type="checkbox" id="remember-me"/>
                  <label for="remember-me">Remember me</label>
               </div>
              */} 
               <div className={"pass-link"}>
                  <Link to="/auth/pirla">Dimenticato la password?</Link>
               </div>
            </div>
            <div className={"field"}>
               <input type="button" value="Accedi" onClick={onSubmit}/>
            </div>
         </form>
         </div>
      </div>
     </div>
     {/* <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20}} >
          <Segment >
            <Form >
              {error && <Message content={error} negative />}
              <Form.Field>
                <Form.Input
                  value={form.username || ""}
                  onChange={onChange}
                  name="username"
                  placeholder="name@provider.com"
                  label="Email"
                />
              </Form.Field>

              <Form.Field>
                <Form.Input
                  value={form.password || ""}
                  onChange={onChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  label="Password"
                />
              </Form.Field>

              <Button
                onClick={onSubmit}
                disabled={loginFormValid || loading}
                fluid
                loading={loading}
                primary
                type="submit"
              >
                Verifica la tua identità
              </Button>
            </Form>
            <Link to='/auth/pirla' style={{color:'black'}}>
              Ho dimenticato la password
            </Link>
          </Segment>
        </Grid.Column>
      </Grid>*/}
    </div>
  );
};

export default LoginUI;
