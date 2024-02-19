import { Text, View, StyleSheet } from "react-native";

function InstText({children}) {
    return (
        <Text style={styles.intText}>{children}</Text>
    )
}

export default InstText;

const styles = StyleSheet.create({
    intText: {
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',  
    },
});
