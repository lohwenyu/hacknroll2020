import React, { useState, useEffect } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Button from "./Button";

import firebase from "firebase";

export default function BookmarkedCourt({ courtId, onPress }) {

    const [court, setCourt] = useState({})

    useEffect(() => {
        firebase.database().ref("/Courts/" + courtId).on("value", snapshot => {
            let data = snapshot.val()
            if (data != null) {
                setCourt(data)
            }
        })
        return () => {
            firebase.database().ref("/Courts/" + courtId).off()
        }
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.addressText}>{court["Address"]}</Text>
            <Image source={court["Picture"]} style={styles.image}/>
            <Button 
                name="View court details" 
                color="empty"
                onPress={onPress}
            />
        </View>
    );
}

const dimensions = Dimensions.get("window");
const deviceWidth = dimensions.width;

const styles = StyleSheet.create({
    container: {
        width: deviceWidth * 0.8,
        justifyContent: "center",
    },
    addressText: {
        textAlign: "left",
        fontSize: 22,
        marginVertical: 5,
        color: "#15F4EE"
    },
    image: {
        width: "100%",
        height: undefined,
        aspectRatio: 4/3,
        borderRadius: 10,
        marginVertical: 5
    }
});