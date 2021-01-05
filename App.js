import React from 'react';
import { View, StyleSheet } from "react-native";
// import PlayersOnCourt from './src/components/PlayersOnCourt';
// import TeamsOnCourt from './src/components/TeamsOnCourt';
import LocationInformation from "./src/pages/LocationInformation";

export default function App() {
    return (
        // <View style={styles.container}>
            <LocationInformation/>
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
    }
})