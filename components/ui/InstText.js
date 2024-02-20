import { Text, View, StyleSheet } from "react-native";

function InstText({children,style}) {
    return (
        <Text style={[styles.intText,style]}>{children}</Text>
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
