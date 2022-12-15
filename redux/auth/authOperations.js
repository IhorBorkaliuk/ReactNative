import { initializeApp } from "firebase/app";
import "firebase/auth";

export const authSignUpUser =
  ({ email, password, login }) =>
  async (dispatch, getSatte) => {
    try {
      await createUserWithEmailAndPassword(email, password, login);
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
  };

export const authSignInUser = () => async (dispatch, getSatte) => {};

export const authSignOutUser = () => async (dispatch, getSatte) => {};
