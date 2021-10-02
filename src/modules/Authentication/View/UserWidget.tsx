import React, { useContext, SyntheticEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { handleLogoutSubmit } from '../AuthenticationHelpers';
import AuthContext, { AuthDispatchContext } from '../Context/AuthContext';
import Button from '../../../components/Button/Button';

const UserWidget = () => {
  const {
    status,
    credential
  } = useContext(AuthContext);
  const authDispatch = useContext(AuthDispatchContext);
  const history = useHistory();
  
  const handleLogin = () => history.push('/login');
  const handleRegister = () => history.push('/register'); // TODO: make a registration page
  const handleLogout = async (e: SyntheticEvent) => {
    const result = await handleLogoutSubmit(e);
    result && authDispatch({type: "logout"});
  };

  const UnAuthenticated = () => (
    <>
      <Button onClick={handleLogin}>Log In</Button>
      <Button onClick={handleRegister}>Sign Up</Button>
    </>
  );

  const Authenticated = () => (
    <>
      <span className="username">Hello, {credential.user.displayName || credential.user.email}</span>
      <Button onClick={handleLogout}>Log Out</Button>
    </>
  );

  return (
    <section className="user-account-controls">
      {
        status === "success" && credential ?
        <Authenticated /> : <UnAuthenticated />
      }
    </section>
  );
};

export default UserWidget;
