import { Text, View,StyleSheet ,Image} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";


function GameOverScreen({roundsNumber,userNumber,onStartNewGame}) {
    return (
        <View style={styles.screen}>
        <Title>GAME OVER</Title>
    <View style={styles.imageContainer}>
    <Image source={require('../assets/images/succes.png')} style={styles.image} />
    </View>
    <View>
        <Text style={styles.summaryText}>
            Your phone needed <Text style={styles.highliht}>{roundsNumber}</Text> rounds to guess the number {""}
            <Text style={styles.highliht}>{userNumber}</Text>
        </Text>

    </View>
    <PrimaryButton onPress={onStartNewGame} >NEW GAME</PrimaryButton>
        </View>
    )

}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
    },
    imageContainer: {
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:2,
        borderColor: Colors.primary700,
        overflow:'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText : {
     fontSize:24,
     color: 'white',
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        marginVertical: 20,
    },
    highliht : {
        color: Colors.primary500,
        fontWeight: 'bold',
    }
})
