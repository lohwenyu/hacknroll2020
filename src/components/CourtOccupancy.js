import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

export default function CourtOccupany({ playerCount , onCourt }) {
    if (onCourt) {
        return (
            <View style={styles.container}>
                <View style={styles.playerContainer}>
                    <Text style={styles.playerCount}>{playerCount}</Text>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>CURRENTLY</Text>
                        <Text style={styles.text}>IN COURT</Text>
                    </View>
                </View>
                <Button name="Start Game" color="green"/>
                <Button name="Exit" color="red"/>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.playerContainer}>
                    <Text style={styles.playerCount}>{playerCount}</Text>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>CURRENTLY</Text>
                        <Text style={styles.text}>IN COURT</Text>
                    </View>
                </View>
                <Button name="Ball" color="blue"/>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    playerContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    playerCount: {
        fontSize: 70,
        fontWeight: "bold",
        color: "#15F4EE"
    },
    textContainer: {
        marginHorizontal: 10
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#15F4EE"
    }
})
