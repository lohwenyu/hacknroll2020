import React from 'react';
import { View, StyleSheet, ScrollView } from "react-native";
import CourtOccupany from '../components/CourtOccupancy';
import PlayersOnCourt from "../components/PlayersOnCourt";
import TeamsOnCourt from '../components/TeamsOnCourt';
import database from '../databaseExample'

import firebase from "firebase";

// change data get
export default function LocationInformation({ route }) {

    let currCourt = firebase.database().ref("/Courts").child(route.params.courtId);
    console.log(currCourt);

    return (
        <ScrollView style={styles.container}>
            <View>
                <CourtOccupany playerCount={10} onCourt={true}/>
                <View style={styles.onCourtContainer}>
                    <PlayersOnCourt players={currCourt["PlayersOnCourt"]}/>
                    <TeamsOnCourt teams={currCourt["TeamsOnCourt"]}/>
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