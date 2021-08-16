import React from "react";
import {
  Form,
  Button,
  Grid,
  Segment,
  Message,
} from "semantic-ui-react";
import logo from "../../assets/images/logo_transparent.png"

const RetreivePasswordUI = ({
  form: { onChange, form, passwordFormValid, error, onPasswordResetSubmit, loading },
}) => {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src={logo} alt="E.N.W.A.T." width="30%"/>
      </div>
      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20, backgroundColor: "#292929"}}>
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

              <Button
                onClick={onPasswordResetSubmit}
                disabled={passwordFormValid || loading}
                fluid
                loading={loading}
                primary
                type="submit"
              >
                Verifica la tua identità
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default RetreivePasswordUI;
