import React from 'react';
import { View, StyleSheet } from "react-native";
import LocationInformation from "./src/pages/LocationInformation";
import Login from "./src/pages/LoginPage"
import User from './src/pages/User';

export default function App() {
    return (
        // <View style={styles.container}>
		<User user={database["Users"]["UserID2"]} known={true} teamedUp={true}/>
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

// possible data storage
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