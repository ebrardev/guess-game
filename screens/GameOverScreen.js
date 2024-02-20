import { Text, View,StyleSheet ,Image} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";


function GameOverScreen() {
    return (
        <View style={styles.screen}>
        <Title>GAME OVER</Title>
    <View style={styles.imageContainer}>
    <Image source={require('../assets/images/succes.png')} style={styles.image} />
    </View>
    <View>
        <Text>
            Your phone needed X  rounds to guess the number Y
        </Text>
    </View>
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
    }
})
