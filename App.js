import React from 'react';
import { StyleSheet } from "react-native";
import Bookmarks from './src/pages/Bookmarks';
import LocationInformation from "./src/pages/LocationInformation";
import Login from "./src/pages/LoginPage"
import Signup from "./src/pages/SignupPage"
import User from './src/pages/User';
import HomePage from './src/pages/HomePage';

// Nav Imports
import NavBar from "./src/navigations/navBar"
import LoginStack from "./src/navigations/landingStack"

import * as firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyCFfoDlIbZv-QtoEEe24vZcbB_MWl8xzYY",
	authDomain: "hacknroll2021-balling.firebaseapp.com",
	projectId: "hacknroll2021-balling",
	storageBucket: "hacknroll2021-balling.appspot.com",
	messagingSenderId: "393417362187",
	appId: "1:393417362187:web:bbba9c8b611af1215a300e",
	measurementId: "G-V71P816NQF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default function App() {
    return (
        // <View style={styles.container}>
		<Signup/>
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

