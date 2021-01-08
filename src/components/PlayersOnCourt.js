import React, { useState, useEffect } from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import firebase from "firebase";

export default function PlayersOnCourt({ courtId }) {

    const [players, setPlayers] = useState({})

    useEffect(() => {
        firebase.database().ref("/Courts/" + courtId + "/PlayersOnCourt").on("value", (snapshot) => {
            let data = snapshot.val()
            if (data == null) {
                setPlayers({})
            } else {
                let players = {...data}
                setPlayers(players)
            }
        })
        return () => {
            firebase.database().ref("/Courts/" + courtId + "/PlayersOnCourt").off()
        }
    })

    let userId = Object.keys(players);

    if (userId.length > 0) {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Players on Court</Text>
                <View style={styles.allPlayersContainer}>
                    {
                        userId.map((key) => (
                            <TouchableOpacity key={key} style={styles.imageContainer}>
                                <Image source={players[key]["DisplayPicture"]} style={styles.image}/>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        );
    } else {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Players on Court</Text>
                <Text style={styles.noPlayerText}>There are currently no players on court.</Text>
            </View>
        );
    }

    
}

const dimensions = Dimensions.get("window");
const deviceWidth = dimensions.width;

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        marginVertical: 10
    },
    text: {
        fontSize: 20,
        color: "#15F4EE",
        fontWeight: "500",
        marginStart: deviceWidth * 0.04
    },
    allPlayersContainer:{
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: deviceWidth * 0.02,
    },
    imageContainer: {
        width: deviceWidth * 0.2,
        height: deviceWidth * 0.2,
        margin: deviceWidth * 0.02
    },
    image: {
        width: "100%",
        height: undefined,
        aspectRatio: 1/1,
        borderRadius: 1000
    },
    noPlayerText: {
        fontSize: 18,
        color: "#ffffff",
        marginStart: deviceWidth * 0.04,
        marginTop: 5
    }
})