import { SyntheticEvent, FormEvent, RefObject } from 'react';
import { 
  getAuth, 
  signOut, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { UserCredential, AuthError } from 'firebase/auth';

export interface LoginState {
  status: string;
  credential?: UserCredential;
  error?: AuthError;
}

export type FormIntent = "login" | "register";

/**
 * Handle when a user submits their credentials to Firebase
 * @param e the form submission event
 * @param fields the form fields
 * @param intent the intent of the form submission (default: "login")
 * @returns the new login state
 */
export const handleCredentialSubmit = 
  async (e: FormEvent, fields: RefObject<HTMLInputElement>[], intent: FormIntent = "login"): Promise<LoginState> => {
  if (!e || typeof e.preventDefault !== "function")
  if (!fields[0].current || !fields[1].current) return null;

  e.preventDefault();

  // FIXME: ADD VALIDATION FOR LOGIN INPUT HERE AND ERROR IF BAD

  const func = intent === "register" ? 
    createUserWithEmailAndPassword : signInWithEmailAndPassword;

  const auth = getAuth();
  const response = await func(
    auth, 
    fields[0].current.value, 
    fields[1].current.value
  ).catch(error => {
    return {
      status: "error",
      error,
    }
  });

  if ("error" in response) {
    return response;
  } else {
    return {
      status: "success",
      credential: response,
    };
  }
};

/**
 * A function to perform a firebase logout. Returns a promise of the
 * boolean result, true if the user was successfully logged out.
 */
export const handleLogoutSubmit = async (e?: SyntheticEvent): Promise<boolean> => {
  if (e && typeof e.stopPropagation === "function") e.stopPropagation();

  const auth = getAuth();
  const response = await signOut(auth)
    .catch(error => ({ error: error }));

  return !(typeof response === "object");
};

/**
 * A function to handle new user registrations.
 * Takes a few more fields than login...
 */
export const handleRegistrationSubmit = 
  async (e: FormEvent, fields: RefObject<HTMLInputElement>[]): Promise<LoginState> => {
  return null;
}