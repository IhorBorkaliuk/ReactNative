import { View } from 'react-native';
import LogScreen from './components/LoginScreen';
import RegScreen from './components/RegistrationScreen';
import { styles } from './components/RegistrationScreen';
import { useState } from 'react';

import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';


const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
const [isReady, setIsReady] = useState(false);
if (!isReady) {
  return (
    <AppLoading
      startAsync={loadFonts}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
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