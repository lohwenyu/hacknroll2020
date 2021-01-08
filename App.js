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

import NavBar from "./src/navigations/NavBar";
import LoginStack from "./src/navigations/LandingStack";
import ProfileStack from './src/navigations/ProfileStack';

export default function App() {

  return (
        // <View style={styles.container}>
        <ProfileStack/>
        // <EditProfile/>
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
