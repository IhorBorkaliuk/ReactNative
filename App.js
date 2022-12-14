import { useState } from 'react';
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Main } from './components/main';

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
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}