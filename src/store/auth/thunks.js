import {
  loginWithEmailPassword,
  registerUserWithEmailPassword,
  signInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  password,
  displayName,
  email
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const {ok, uid,photoURL,errorMessage} = await registerUserWithEmailPassword({
      password,
      displayName,
      email,
    });
    
    if(!ok) return dispatch(logout({errorMessage}))
    dispatch(login({uid,displayName,email,photoURL}));
  };
};

  
export const startLoginWithEmailPassword=({email,password})=>{
  return async(dispatch)=>{
     dispatch(checkingCredentials());


     const result =await loginWithEmailPassword({email,password});

     if(!result.ok) return dispatch (logout(result));
     dispatch(login(result))

  }
}
