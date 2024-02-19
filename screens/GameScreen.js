import { View, Text,StyleSheet,Alert} from "react-native";
import { useState, useEffect } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstText from "../components/ui/InstText";


function generateRandomBetween(min,max,exclude) {
    const rndNum =  Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude){
        return generateRandomBetween(min,max,exclude);
    } else {
        return rndNum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen ({userNumber,onGameOver}) {
    const intialGuess = generateRandomBetween(1,100,userNumber);
    const [currentGuess, setCurrentGuess] = useState(intialGuess);

    useEffect(() => {
        if(currentGuess === userNumber){
           onGameOver();
        }
    }
    ,[currentGuess,userNumber, onGameOver]);

    function nextGuessHandler(direction) {
        if   ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert('Don\'t lie!','You know that this is wrong...',[{text:'Sorry!',style:'cancel'}]);
            return;
        }
        if (direction==='lower' ) {
            maxBoundary= currentGuess;
           
        } else {
            minBoundary = currentGuess+1;
       
        }
        console.log(minBoundary,maxBoundary);
        const newRndNumber = generateRandomBetween(minBoundary,maxBoundary,currentGuess);
        setCurrentGuess(newRndNumber);

    }
    return (
        <View style={styles.screen}> 
            <Title>Opponent's Guess</Title>

           <NumberContainer> {currentGuess} </NumberContainer>
            <Card>
            <InstText> High or Lower ? </InstText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')} >-</PrimaryButton>
                    </View>
             <View  style={styles.buttonContainer}>
                <PrimaryButton onPress={nextGuessHandler.bind(this,"greater")} >+</PrimaryButton>
             </View>
              
                </View>
        
                </Card>
          
 
        </View>
    )

}
export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding:24,

    },

    buttonsContainer: {
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        
        maxWidth:'100%',
    },
    buttonContainer: {
        width:70,
        gap:10,
    }
})