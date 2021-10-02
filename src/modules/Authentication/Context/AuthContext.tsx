import React, { useReducer } from 'react';
import AuthReducer, { initialAuthState } from './AuthReducer';

export const AuthContext = React.createContext(null);
export const AuthDispatchContext = React.createContext(null);

/**
 * Wraps the AuthContext providers (state and dispatch) and renders any children.
 */
export const AuthContextWrapper = (props) => {
  const [authState, authDispatch] = 
    useReducer(AuthReducer, initialAuthState);

  return (
    <AuthContext.Provider value={authState}>
      <AuthDispatchContext.Provider value={authDispatch}>
        {props.children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  )
};

export default AuthContext;
