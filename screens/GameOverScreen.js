import { Text, View,StyleSheet } from "react-native";

function GameOverScreen() {
    return (
        <View style={styles.screen}>
        <Text>Game Over</Text>
        </View>
    )

}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
