import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import  {LinearGradient} from 'expo-linear-gradient';
export default function App() {
  return (
  <LinearGradient colors={["#260078","#06c2b5", "#ed05bb"]} style={styles.rootContainer}>
  <ImageBackground source={require('./assets/images/bgg.png')}  
  style={styles.rootContainer}
  resizeMode='cover' 
  imageStyle={{opacity:0.30}}
  >
  <StartGameScreen/>
  </ImageBackground>
  

  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    
    flex:1,
   
  },
});
