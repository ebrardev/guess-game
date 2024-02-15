

import { View,Text ,Pressable,StyleSheet} from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({children,onPress}) {
 function onPressHandler(){
        console.log('Button pressed');
    }

    return (
     <Pressable
      onPress={onPress} 
      style={({pressed}) => pressed ? [ styles.buttonInnerContainer ,styles.pressed] :  styles.buttonInnerContainer}
      android_ripple={{color:"#969e05"}}>
           <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
     </Pressable>
    )
}
export default PrimaryButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor:Colors.primary500,
        padding:8,
        marginVertical:4,
        borderRadius:8,
        elevation:2,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.25,

    },
    text: {
        color:'black',
        fontWeight:'bold',
        textAlign:'center'
    }

})