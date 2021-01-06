import React from 'react';
import { View, StyleSheet, Text } from "react-native";

export default function GeneralStatistics({ user }) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>General Statistics</Text>
            <Text style={styles.statistics}>Games Played: {user["GamesPlayed"]}</Text>
            <Text style={styles.statistics}>Win Rate: {user["WinRate"]}</Text>
            <Text style={styles.statistics}>Lose Rate: {user["LoseRate"]}</Text>
            <Text style={styles.statistics}>Average Point/Game: {user["AveragePPG"]}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#15F4EE",
        marginBottom: 10
    },
    statistics: {
        fontSize: 20
    }
})