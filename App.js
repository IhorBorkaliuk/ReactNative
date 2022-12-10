import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogScreen from './components/LoginScreen';
import RegScreen from './components/RegistrationScreen';
import { styles } from './components/RegistrationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <RegScreen />
      {/* <LogScreen/> */}
    </View>
  );
}