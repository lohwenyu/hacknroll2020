import React from 'react';
import { View, StyleSheet, ScrollView } from "react-native";
import CourtOccupany from '../components/CourtOccupancy';
import PlayersOnCourt from "../components/PlayersOnCourt";
import TeamsOnCourt from '../components/TeamsOnCourt';

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

// possible way to store data
const database = {
	"NameOfCourt": {
		"PlayersOnCourt": {
			"UserID1": {
				"DisplayPicture": require("../images/placeholder.png")
			},
			// "UserID2": {
			// 	"DisplayPicture": require("../images/placeholder.png")
			// },
			// "UserID3": {
			// 	"DisplayPicture": require("../images/placeholder.png")
			// },
			// "UserID4": {
			// 	"DisplayPicture": require("../images/placeholder.png")
			// },
			// "UserID5": {
			// 	"DisplayPicture": require("../images/placeholder.png")
			// }
		},
		"TeamsOnCourt": {
			"TeamID1": {
				"DisplayPicture": require("../images/placeholder.png"),
				"TeamName": "Hello",
				"Players": {
					"UserID1": {
						"DisplayPicture": require("../images/placeholder.png")
					},
					"UserID2": {
						"DisplayPicture": require("../images/placeholder.png")
					}
				}
			},
			"TeamID2": {
				"DisplayPicture": require("../images/placeholder.png"),
				"TeamName": "Hello",
				"Players": {
					"UserID1": {
						"DisplayPicture": require("../images/placeholder.png")
					},
					"UserID2": {
						"DisplayPicture": require("../images/placeholder.png")
					}
				}
			}
		}
	}
}