import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
  <View style={styles.rootContainer}>
  
  
  <StartGameScreen/>
  </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor:'#6e34eb',
    flex:1,
    justifyContent:' space-between',
  },
});
