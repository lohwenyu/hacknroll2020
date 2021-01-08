import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Button from "./Button";

export default function LocationDescription({ court }) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{court["Address"]}</Text>
            <Image source={court["Picture"]} style={styles.picture}/>
            <Text style={styles.checkCourtOutText}>Click to view court details.</Text>
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
    },
    checkCourtOutText: {
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
        color: "#15F4EE"
    }
})