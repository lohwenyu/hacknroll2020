import React from 'react';
import { View, StyleSheet } from "react-native";
import GeneralStatistics from './src/components/GeneralStatistics';

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
			"AveragePPG": 11,
			"DisplayPicture": require("./src/images/placeholder.png")
		},
		"UserID2": {
			"Name": "Kok Wee",
			"GamesPlayed": 37,
			"WinRate": 0.86,
			"LoseRate": 0.07,
			"AveragePPG": 11,
			"DisplayPicture": require("./src/images/placeholder.png")
		},
		"UserID3": {
			"Name": "Wen Yu",
			"GamesPlayed": 37,
			"WinRate": 0.87,
			"LoseRate": 0.07,
			"AveragePPG": 11,
			"DisplayPicture": require("./src/images/placeholder.png")
		},
	}
}