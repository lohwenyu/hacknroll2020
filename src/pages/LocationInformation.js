import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from "react-native";
import CourtOccupany from '../components/CourtOccupancy';
import PlayersOnCourt from "../components/PlayersOnCourt";
import TeamsOnCourt from '../components/TeamsOnCourt';
import database from '../databaseExample'

import firebase from "firebase";

// change data get
export default function LocationInformation({ route }) {

    const [currCourt, setCurrCourt] = useState("")

    useEffect(() => {
        firebase.database().ref("/Courts").child(route.params.courtId).once("value", (snapshot) => {
            setCurrCourt(snapshot.key)
        }
    )})

    // let currCourt = firebase.database().ref("/Courts").child(route.params.courtId);
    console.log("HELLLLOOOO")
    console.log("HELLLLOOOO" + currCourt);

    return (
        <ScrollView style={styles.container}>
            <View>
                <CourtOccupany courtId={currCourt}/>
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