import React from 'react';
import { View, StyleSheet } from "react-native";
import BookmarkedCourt from './src/components/BookmarkedCourt';
import Bookmarks from './src/pages/Bookmarks';
import LocationInformation from "./src/pages/LocationInformation";
import Login from "./src/pages/LoginPage"
import User from './src/pages/User';

import database from "./src/databaseExample";

export default function App() {
    return (
        // <View style={styles.container}>
		// <User user={database["Users"]["UserID2"]} known={true} teamedUp={true}/>
		<Bookmarks user={database["Users"]["UserID2"]}/>
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

