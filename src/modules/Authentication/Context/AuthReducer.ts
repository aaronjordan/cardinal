import { UserCredential } from 'firebase/auth';

interface AuthState {
  credential?: UserCredential;
  status?: string;
  modified?: Date;
}

export const initialAuthState = Object.freeze({
  credential: null,
  status: null
});

type AuthActionType = "init" | "login" | "logout";

interface AuthAction {
  type: AuthActionType;
  payload?: AuthState;
}

export default (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {

    case "init":
      return {
        ...initialAuthState,
        modified: new Date()
      };

    case "login":
      return {
        ...state,
        status: action.payload?.status,
        credential: action.payload?.credential,
        modified: new Date()
      };

    case "logout":
      return {
        ...initialAuthState,
        status: "logout",
        modified: new Date()
      };

    default:
      return state;
  }
};