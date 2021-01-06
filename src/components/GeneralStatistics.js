import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

export default function GeneralStatistics({ user }) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={user["DisplayPicture"]} style={styles.image}/>
            </View>
            <Text style={styles.usernameText}>{user["Name"]}</Text>
            <Text style={styles.header}>General Statistics</Text>
            <Text style={styles.statistics}>Games Played: {user["GamesPlayed"]}</Text>
            <Text style={styles.statistics}>Win Rate: {user["WinRate"]}</Text>
            <Text style={styles.statistics}>Lose Rate: {user["LoseRate"]}</Text>
            <Text style={styles.statistics}>Average Point/Game: {user["AveragePPG"]}</Text>
        </View>
    );
}

const dimensions = Dimensions.get("window");
const deviceWidth = dimensions.width;
const deviceHeight = dimensions.height;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000"
    },
    imageContainer: {
        width: deviceWidth * 0.5,
        marginBottom: 10
    },
    image: {
        width: "100%",
        height: undefined,
        aspectRatio: 1/1,
        borderRadius: 1000
    },
    usernameText: {
        fontSize: 20,
        marginBottom: deviceHeight * 0.05,
        color: "#ffffff"
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#15F4EE",
        marginBottom: 10
    },
    statistics: {
        fontSize: 20,
        color: "#ffffff"
    }
})