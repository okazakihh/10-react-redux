import { types } from "../types/Types";
import { firebase, GoogleAuthProvider } from "../firebase/config-firebase";

export const googlelogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(GoogleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const register = (email, password, user) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: user });

        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};
