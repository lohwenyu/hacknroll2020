import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

import firebase from "firebase";

export default function CourtOccupany({ courtId }) {

    let currUser = firebase.auth().currentUser.uid;

    const [onCourt, setOnCourt] = useState(false);
    
    useEffect(()=> {
        firebase.database().ref("/Courts/" + courtId + "/PlayersOnCourt").once("value", (snapshot) => {
            if (snapshot.child(currUser).exists()) {

                setOnCourt(true);
            }
        })
    }, [currUser])

    const onPressBall = () => {
        firebase.database().ref("/Courts/" + courtId + "/PlayersOnCourt").child(currUser).set(true);
        setOnCourt(true);
    }

    if (onCourt) {
        return (
            <View style={styles.container}>
                <View style={styles.playerContainer}>
                    <Text style={styles.playerCount}>{courtId}</Text>
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
                    <Text style={styles.playerCount}>{courtId}</Text>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>CURRENTLY</Text>
                        <Text style={styles.text}>IN COURT</Text>
                    </View>
                </View>
                <Button name="Ball" color="blue" onPress={() => onPressBall()}/>
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
