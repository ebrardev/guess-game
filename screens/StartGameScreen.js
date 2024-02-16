
import { TextInput,Button, View,StyleSheet,Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import React, { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";

function StartGameScreen({onPickNumber}) {
  const [enteredValue, setEnteredValue] = useState('');

  function numberInputHandler(inputText){
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    }
    function resetInputHandler(){
        setEnteredValue('');
    }
    function confirmInputHandler(){
      const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid number!','Number has to be a number between 1 and 99.',[{text:'Okay',style:'destructive',onPress:resetInputHandler}]);
            return;
        }
        onPickNumber(chosenNumber);
        console.log(onPickNumber);
    }
    return (
        <View>
 
    <Title> Guess My Number</Title>
      
    <View style={styles.inputContainer}> 
        <TextInput  style={styles.numberInput} 
         maxLength={2} 
         keyboardType="number-pad"
         autoCapitalize="none"
            autoCorrect={false}
            placeholder="31"
            value={enteredValue}
            onChangeText={numberInputHandler}
         />
   <View style={styles.buttons}>
    <View style={styles.buttonContainer}>
    <PrimaryButton onPress={resetInputHandler} >Reset </PrimaryButton>
    </View>
  <View style={styles.buttonContainer}>
    <PrimaryButton onPress={confirmInputHandler}>Confirm </PrimaryButton>
    </View>
   </View>
    </View>
    </View>
    )
}
export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex:1,
        marginTop:100,
        alignItems:'center',
    },
inputContainer : {
   
    padding: 16,
    marginTop:100,
    marginHorizontal: 24,
    backgroundColor:Colors.primary700,
    color:'white',
    borderRadius:8,
    elevation:4,
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowRadius:6,
    shadowOpacity:0.25,

},
numberInput :{
    height:50,
    width:50,
    fontSize:32,
    borderBottomColor:'#ddb52f',
    borderBottomWidth:2,
    color:'white',
    marginVertical:8,
    fontWeight:'bold',
   textAlign:'center',
    alignSelf:'center'
},
buttons:{
    flexDirection:'row',
    padding:8,
    gap:8,
},
buttonContainer :{
    flex:1,

}
})