import React from 'react';
import { View, StyleSheet, ScrollView } from "react-native";
import CourtOccupany from '../components/CourtOccupancy';
import PlayersOnCourt from "../components/PlayersOnCourt";
import TeamsOnCourt from '../components/TeamsOnCourt';
import database from '../databaseExample'

// change data get
export default function LocationInformation() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <CourtOccupany playerCount={10} onCourt={true}/>
                <View style={styles.onCourtContainer}>
                    <PlayersOnCourt players={database["Courts"]["CourtID1"]["PlayersOnCourt"]}/>
                    <TeamsOnCourt teams={database["Courts"]["CourtID1"]["TeamsOnCourt"]}/>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000"
    },
    onCourtContainer: {
        alignItems: "baseline"
    }
})