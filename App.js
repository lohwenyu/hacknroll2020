import React from 'react';
import { View, StyleSheet } from "react-native";

import BookmarkedCourt from './src/components/BookmarkedCourt';

import Bookmarks from './src/pages/Bookmarks';
import LocationInformation from "./src/pages/LocationInformation";
import Login from "./src/pages/LoginPage";
import Signup from "./src/pages/SignupPage";
import User from './src/pages/User';
// <User userId={"UserID2"}/>
import Profile from './src/pages/Profile';
import EditProfile from './src/pages/EditProfile';
import HomePage from './src/pages/HomePage';

import database from "./src/databaseExample";

import NavBar from "./src/navigations/navBar";
import LandingStack from "./src/navigations/landingStack";
import ProfileStack from './src/navigations/ProfileStack';

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
		<LandingStack/>
		// </View>
    )
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
    }
})
