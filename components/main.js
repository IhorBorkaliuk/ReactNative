import { onRoute } from "../router";
import { authStateChangeUser } from "../redux/auth/authOperations";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";

const Main = () => {
  const { stateChange } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(authStateChangeUser());
//   }, []);
    

  const routing = onRoute(stateChange);
  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
