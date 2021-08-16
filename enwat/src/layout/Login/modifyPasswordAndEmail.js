import React, {useState} from 'react';
import {auth} from '../../helpers/firebase';

import {isValidEmail, isValidPassword} from '../../utils/isValid';

import {
    Form,
    Button,
    Grid,
    Segment,
    Message,
  } from "semantic-ui-react";


const ModifyPasswordAndEmailLayout = () => {

    const [error, setError] = useState(null);

    const [password, setPassword] = useState("");

    const [mail, setMail] = useState("");

    const [loading, setLoading] = useState(false);

    const loginFormValid = () => {
        if(isValidEmail(mail) || isValidPassword(password))
            return false;
        return true;
    }

    const updateMail = (e, { name, value }) =>{
        setMail(value);
    }

    const updatePassword = (e, { name, value }) =>{
        setPassword(value);
    }

     async function updateUser(){
        if(isValidEmail(mail))
            auth.currentUser.updateEmail(mail).then(() => {
                console.log("email updated");
                setError("");
                if(isValidPassword(password))
            auth.currentUser.updatePassword(password)
            .then(() => {
                console.log("password updated");
                setError("");
            }).catch((err) =>{
                setError(err.message)
            }
            );
            }).catch((err) =>{
                setError(err.message)
            }
            );
        else if(isValidPassword(password))
        auth.currentUser.updatePassword(password)
        .then(() => {
            console.log("password updated");
            setError("");
        }).catch((err) =>{
            setError(err.message)
        }
        );
    }

    const applyMod = async () =>{
        setLoading(true);

        let x = await updateUser();

        setPassword("");
        setMail("");
        setLoading(false);

        

    }

    return(
        <div>
          <Segment>
            <Form>
              {error && <Message content={error} negative />}
              <Form.Field>
                <Form.Input
                  value={mail || ""}
                  onChange={updateMail}
                  name="username"
                  placeholder="name@provider.com"
                  label="Email"
                />
              </Form.Field>

              <Form.Field>
                <Form.Input
                  value={password || ""}
                  onChange={updatePassword}
                  type="password"
                  name="password"
                  placeholder="Password"
                  label="Password"
                />
              </Form.Field>

              <Button
                onClick={applyMod}
                disabled={loginFormValid() || loading}
                fluid
                loading={loading}
                primary
                type="submit"
              >
                Invia modifiche
              </Button>
            </Form>
            </Segment>
        </div>
    )
}

export default ModifyPasswordAndEmailLayout;