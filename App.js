import React from 'react';
import { View, StyleSheet } from "react-native";
import GeneralStatistics from './src/components/GeneralStatistics';
// import PlayersOnCourt from './src/components/PlayersOnCourt';
// import TeamsOnCourt from './src/components/TeamsOnCourt';
import LocationInformation from "./src/pages/LocationInformation";

export default function App() {
    return (
        <View style={styles.container}>
            <GeneralStatistics user={database["Users"]["UserID1"]}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
    }
})

const database = {
	"Users": {
		"UserID1": {
			"Name": "Kok Wee",
			"GamesPlayed": 37,
			"WinRate": 0.87,
			"LoseRate": 0.07,
			"AveragePPG": 11
		},
		"UserID2": {
			"Name": "Kok Wee",
			"GamesPlayed": 37,
			"WinRate": 0.86,
			"LoseRate": 0.07,
			"AveragePPG": 11
		},
		"UserID3": {
			"Name": "Wen Yu",
			"GamesPlayed": 37,
			"WinRate": 0.87,
			"LoseRate": 0.07,
			"AveragePPG": 11
		},
	}
}