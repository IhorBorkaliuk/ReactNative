import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { onRoute } from "../router.js";
import { authStateChangeUser } from "../redux/auth/authOperations.js";

//----------------------------------------------------------------------
export const Main = () => {
  const { stateChange } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  const routing = onRoute(stateChange);

  return <NavigationContainer>{routing}</NavigationContainer>;
};
