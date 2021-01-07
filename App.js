import React from 'react';
import { View, StyleSheet } from "react-native";
import Bookmarks from './src/pages/Bookmarks';

import database from "./src/databaseExample";
import HomePage from './src/pages/HomePage';

export default function App() {
    return (
        // <View style={styles.container}>
		// <User user={database["Users"]["UserID2"]} known={true} teamedUp={true}/>
		// <Bookmarks user={database["Users"]["UserID2"]}/>
		<HomePage/>
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

