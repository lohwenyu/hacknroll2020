import React from 'react';
import { View, StyleSheet, ScrollView } from "react-native";
import CourtOccupany from '../components/CourtOccupancy';
import PlayersOnCourt from "../components/PlayersOnCourt";
import TeamsOnCourt from '../components/TeamsOnCourt';

// change data get
export default function LocationInformation() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <CourtOccupany playerCount={10} onCourt={true}/>
                <View style={styles.onCourtContainer}>
                    <PlayersOnCourt players={database["NameOfCourt"]["PlayersOnCourt"]}/>
                    <TeamsOnCourt teams={database["NameOfCourt"]["TeamsOnCourt"]}/>
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