import { View } from 'react-native';
import LogScreen from './components/LoginScreen';
import RegScreen from './components/RegistrationScreen';
import { styles } from './components/RegistrationScreen';
import { useState } from 'react';

import * as Font from "expo-font";
import AppLoading from "expo";


const fonts = () =>
  Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setIsReady(true)}
      />
    );
  }
  return (
    <View style={styles.container}>
      <RegScreen />
      {/* <LogScreen/> */}
    </View>
  );
}