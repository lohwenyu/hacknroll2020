import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TeamsOnCourt({ teams }) {

    if (teams != null) {
        let teamId = Object.keys(teams);

        return(
            <View style={styles.container}>
                <Text style={styles.text}>Teams</Text>
                <View style={styles.allTeamsContainer}>
                    {
                        teamId.map((key) => (
                            <TouchableOpacity key={key} style={styles.imageContainer}>
                                <Image source={teams[key]["DisplayPicture"]} style={styles.image}/>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        );
    } else {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Teams</Text>
                <Text>There are currently no teams on court.</Text>
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
    allTeamsContainer:{
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
    }
})