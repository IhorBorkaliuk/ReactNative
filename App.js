import { useState } from 'react';

import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';

import { onRoute } from './router';

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};



export default function App() {
  const [isReady, setIsReady] = useState(false);
  const routing = onRoute(true);
if (!isReady) {
  return (
    <AppLoading
      startAsync={loadFonts}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />
  );
}
  return <NavigationContainer>{routing}</NavigationContainer>;
}