import React from 'react';
import { View, StyleSheet } from "react-native";
import BookmarkedCourt from './src/components/BookmarkedCourt';
import Bookmarks from './src/pages/Bookmarks';
import LocationInformation from "./src/pages/LocationInformation";
import Login from "./src/pages/LoginPage"
import Signup from "./src/pages/SignupPage"
import User from './src/pages/User';

// Nav Imports
import NavBar from "./src/navigations/navBar"
import LoginStack from "./src/navigations/landingStack"

export default function App() {
    return (
        // <View style={styles.container}>
		<LoginStack/>
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

