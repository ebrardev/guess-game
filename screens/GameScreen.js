import { View, Text,StyleSheet} from "react-native";
import { useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";


function generateRandomBetween(min,max,exclude) {
    const rndNum =  Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude){
        return generateRandomBetween(min,max,exclude);
    } else {
        return rndNum;
    }
}
function GameScreen ({userChoice}) {
    const intialGuess = generateRandomBetween(1,100,userChoice);
    const [currentGuess, setCurrentGuess] = useState(intialGuess);

    return (
        <View style={styles.screen}> 
            <Title>Opponent's Guess</Title>

           <NumberContainer> {currentGuess} </NumberContainer>
            <View>
                <Text>Higher or lower ? </Text>
              
            </View>
            {/* <View> Log rounds</View> */}
        </View>
    )

}
export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding:24,

    },

})