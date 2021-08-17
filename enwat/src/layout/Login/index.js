import React from "react";
import {
  Form,
  Button,
  Grid,
  Segment,
  Message,
} from "semantic-ui-react";
import logo from "../../assets/images/logo_transparent.png"

import {Link} from 'react-router-dom'

const LoginUI = ({
  form: { onChange, form, loginFormValid, error, onSubmit, loading },
}) => {
  return (
    <div style={{display: "flex", justifyContent: 'center', alignContent: 'center'}}>
      <div className={"glass"}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src={logo} alt="E.N.W.A.T." width="30%"/>
      </div>
      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20}}>
          <Segment >
            <Form>
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
      </Grid>
      </div>
    </div>
  );
};

export default LoginUI;
