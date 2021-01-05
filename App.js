import React from 'react';
import { View, StyleSheet } from "react-native";
import PlayersOnCourt from './src/components/PlayersOnCourt';

export default function App() {
    return (
        <View style={styles.container}>
            <PlayersOnCourt players={database["NameOfCourt"]["PlayersOnCourt"]}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#000000"
    }
})

// possible way to store data
const database = {
	"NameOfCourt": {
		"PlayersOnCourt": {
			"UserID1": {
				"DisplayPicture": require("./src/images/placeholder.png")
			},
			"UserID2": {
				"DisplayPicture": require("./src/images/placeholder.png")
			},
			"UserID3": {
				"DisplayPicture": require("./src/images/placeholder.png")
			},
			"UserID4": {
				"DisplayPicture": require("./src/images/placeholder.png")
			},
			"UserID5": {
				"DisplayPicture": require("./src/images/placeholder.png")
			}
		}
	}
}