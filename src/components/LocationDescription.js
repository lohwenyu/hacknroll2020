import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Button from "./Button";

export default function LocationDescription({ court, navigation, onPress}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{court["Address"]}</Text>
            <Image source={court["Picture"]} style={styles.picture}/>
            <Button 
                name="View Court Details" 
                color="checkCourtOut"
                onPress={onPress}
            /> 
        </View>
    );
}

const dimensions = Dimensions.get("window");
const deviceWidth = dimensions.width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        width: deviceWidth * 0.6
    },
    text: {
        fontSize: 18,
    },
    picture: {
        width: "100%",
        height: undefined,
        aspectRatio: 2/1,
        marginVertical: 5
    }
})