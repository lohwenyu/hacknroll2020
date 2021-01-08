import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import database from '../databaseExample';

export default function GeneralStatistics({ userId }) {

    const userInfo = database["Users"][userId]
    
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={userInfo["DisplayPicture"]} style={styles.image}/>
            </View>
            <Text style={styles.usernameText}>{userInfo["Name"]}</Text>
            <Text style={styles.userIdText}>#{userId}</Text>
            <Text style={styles.header}>General Statistics</Text>
            <Text style={styles.statistics}>Games Played: {userInfo["GamesPlayed"]}</Text>
            <Text style={styles.statistics}>Win Rate: {userInfo["WinRate"]}</Text>
            <Text style={styles.statistics}>Lose Rate: {userInfo["LoseRate"]}</Text>
            <Text style={styles.statistics}>Average Point/Game: {userInfo["AveragePPG"]}</Text>
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
        color: "#ffffff"
    },
    userIdText: {
        fontSize: 14,
        marginBottom: deviceHeight * 0.05,
        color: "#ffffff",
        fontWeight: '400'        
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