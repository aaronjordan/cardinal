import React, { useState, useEffect, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import { AuthDispatchContext } from '../Context/AuthContext';
import { FormIntent, handleCredentialSubmit, LoginState } from '../AuthenticationHelpers';

interface LoginFormProps {
  intent?: FormIntent;
  disableEmailLogin?: boolean;
  disableOAuthLogin?: boolean;
};

const LoginForm = (props: LoginFormProps) => {
  const showEmail = !props.disableEmailLogin;
  const showOAuth = !props.disableOAuthLogin;

  const history = useHistory();
  const authDispatch = useContext(AuthDispatchContext);
  const [authLoading, setAuthLoading] = useState(false);
  const [loginState, setLoginState] = useState<LoginState>({status: "unset"});
  const inputs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  const intentKeyword = props.intent === "register" ? "Register" : "Log in";

  useEffect(() => {
    if (loginState.status === "success") {
      authDispatch({
        type: "login",
        payload: loginState
      });
      history.push('/');
    } else if (loginState.status === "error") {
      // do something about the error
      console.error('login error!', loginState);
    }
  }, [loginState]);

  const handleSubmit = async (e) => {
    setAuthLoading(true);
    setLoginState(await handleCredentialSubmit(e, inputs, props.intent));
    setAuthLoading(false);
  }

  return (
    <section className="auth-login">
      <form onSubmit={handleSubmit}>
        { 
          showEmail &&
          <fieldset id="basic-auth">
            <legend>{intentKeyword} with email:</legend>
            <label htmlFor="login-email">
              Email:
            </label>
            <input
              id="login-email"
              type="text"
              placeholder="Email"
              ref={inputs[0]}
            />
            <label htmlFor="login-password">
              Password:
            </label>
            <input
              id="login-password"
              type="password"
              placeholder="Password"
              ref={inputs[1]}
            />
            <Button type="submit" disabled={authLoading}>
              Submit
            </Button>
          </fieldset>
        }
        {
          showOAuth &&
          <fieldset id="oauth">
            <legend>{intentKeyword} with another provider:</legend>
            <p>BUTTONS HERE</p>
          </fieldset>
        }
      </form>
    </section>
  )
}

export default LoginForm;
