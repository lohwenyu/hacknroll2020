import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

import firebase from "firebase";

export default function CourtOccupany({ courtId }) {

    let currUser = firebase.auth().currentUser.uid;

    const [onCourt, setOnCourt] = useState(false);
    const [count, setCount] = useState(0);



    useEffect(()=> {
        firebase.database().ref("/Courts/" + courtId + "/PlayersOnCourt").once("value", (snapshot) => {
            if (snapshot.child(currUser).exists()) {
                setOnCourt(true);
            }
        })
    })

    useEffect(() => {
        firebase.database().ref("/Courts/" + courtId + "/PlayersOnCourt").on("value", (snapshot) => {
            let data = snapshot.val()
            if (data == null) {
                setCount(0)
            } else {
                let players = {...data}
                setCount(Object.keys(players).length)
            }
        })
        return () => {
            firebase.database().ref("/Courts/" + courtId + "/PlayersOnCourt").off()
        }
    })

    const onPressBall = () => {
        firebase.database().ref("/Courts/" + courtId + "/PlayersOnCourt").child(currUser).set(true);
        setOnCourt(true);
    }

    const onPressExit = () => {
        firebase.database().ref("/Courts/" + courtId + "/PlayersOnCourt").child(currUser).remove();
        setOnCourt(false);
    }

    if (onCourt) {
        return (
            <View style={styles.container}>
                <View style={styles.playerContainer}>
                    <Text style={styles.playerCount}>{count}</Text>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>CURRENTLY</Text>
                        <Text style={styles.text}>IN COURT</Text>
                    </View>
                </View>
                <Button name="Start Game" color="green"/>
                <Button name="Exit" color="red" onPress={() => onPressExit()}/>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.playerContainer}>
                    <Text style={styles.playerCount}>{count}</Text>
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
