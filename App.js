import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import  {LinearGradient} from 'expo-linear-gradient';
export default function App() {
  return (
  <LinearGradient colors={["#260078","#06c2b5", "#ed05bb"]} style={styles.rootContainer}>
  
  
  <StartGameScreen/>
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    
    flex:1,
   
  },
});
