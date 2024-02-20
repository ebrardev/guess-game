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
  const [guessRounds, setGuessRounds] = useState(0);

 
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler(numberOfRounds) {
    setGuessRounds(numberOfRounds);
    setGameIsOver(true);
  } 
  function startNewGameHandler() {
    setGuessRounds(0);
    setUserNumber(null);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if(userNumber){
    screen = <GameScreen userNumber={userNumber}  onGameOver = {gameOverHandler} onPickNumber = {pickedNumberHandler} />
  }

   if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={ startNewGameHandler} onPickNumber={pickedNumberHandler} />;
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
