import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground ,SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import  {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

 
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler() {
    setGameIsOver(true);
  } 
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if(userNumber){
    screen = <GameScreen userNumber={userNumber}  onGameOver = {gameOverHandler} onPickNumber = {pickedNumberHandler} />
  }

   if (gameIsOver && userNumber) {
    screen = <GameOverScreen onPickNumber={pickedNumberHandler} />;
  }

  return (
  <LinearGradient colors={["#260078","#06c2b5", "#ed05bb"]} style={styles.rootContainer}>
  <ImageBackground source={require('./assets/images/bgg.png')}  
  style={styles.rootContainer}
  resizeMode='cover' 
  imageStyle={{opacity:0.30}}
  >
  <SafeAreaView style={styles.View}>
  {screen}
  </SafeAreaView>
  </ImageBackground>

  

  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    
    flex:1,
   
  },
  View: {
    flex:1,
  
  }
});
