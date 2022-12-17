import "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { getAuth, updateProfile, onAuthStateChanged } from "firebase/auth";


export const authSignUpUser =
  ({ email, password, login }) =>
  async () => {
    try {
      const auth = getAuth();
      
      const user = await createUserWithEmailAndPassword(auth, email, password);


      updateProfile(auth.currentUser, {
        displayName: login,
      })

      console.log("user", user);
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
  };

export const authSignInUser = () => async () => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log("user", user);
  } catch (error) {
    console.log("error", error);
    console.log("error.message", error.message);
  }
};

export const authStateChangeUser = () => {
      const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
dispatch(
  authSlice.actions.updateUserProfile({
    userId: user.uid,
    login: user.displayName,
  })
);

dispatch(authSlice.actions.stateChange({ stateChange: true }));
    }
  });
}


export const authSignOutUser = () => async (dispatch, getSatte) => {};
