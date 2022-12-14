import { app } from "../../firebase/config";

export const authSignUpUser =
  ({ email, password, login }) =>
  async (dispatch, getSatte) => {
    console.log("email, password, login", email, password, login);
    try {
        const user = await app
          
        .auth()
        .createUserWithEmailAndPassword(email, password);
        console.log(app);
      console.log("user", user);
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
  };

export const authSignInUser = () => async (dispatch, getSatte) => {};

export const authSignOutUser = () => async (dispatch, getSatte) => {};
