import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import ProfileStack from "./ProfileStack";
import HomeStack from "./HomeStack";
import BookmarksStack from "./BookmarksStack";

const Tab = createBottomTabNavigator();

export default function NavBar() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'Courts') {
                    iconName = focused
                    ? 'basketball'
                    : 'basketball-outline';

                } else if (route.name === 'Chats') {
                    iconName = focused 
                    ? 'chatbubble-ellipses' 
                    : 'chatbubble-ellipses-outline';

                } else if (route.name === 'Bookmarks') {
                    iconName = focused 
                    ? 'bookmarks' 
                    : 'bookmarks-outline';

                } else if (route.name === 'Leaderboard') {
                    iconName = focused 
                    ? 'trophy' 
                    : 'trophy-outline';

                } else if (route.name === 'Profile') {
                    iconName = focused 
                    ? 'person-circle'
                    : 'person-circle-outline';
                }       

                return <Ionicons name={iconName} size={size} color={"#15F4EE"} />;
            },
            })}

            tabBarOptions={{
                style:{
                    backgroundColor:"#000000",
                    // height
                },
                activeTintColor: "#15F4EE",
                inactiveTintColor: "#15F4EE"
            }}

            
        >

            <Tab.Screen name="Courts" component={HomeStack} />
            <Tab.Screen name="Chats" component={Chats} />
            <Tab.Screen name="Bookmarks" component={BookmarksStack} />
            <Tab.Screen name="Leaderboard" component={Leaderboard} />
            <Tab.Screen name="Profile" component={ProfileStack} />

        </Tab.Navigator>
    )
}

function Courts() {
    return(
        <View style={styles.DemoPageLayout}>
            <Text style={styles.BaseText}>Court (Home) Screen</Text>
        </View>
    )
}

function Chats() {
    return(
        <View style={styles.DemoPageLayout}>
            <Text style={styles.BaseText}>Chat Screen</Text>
        </View>
    )
}

function Bookmarks() {
    return(
        <View style={styles.DemoPageLayout}>
            <Text style={styles.BaseText}>Bookmarks Screen</Text>
        </View>
    )
}

function Leaderboard() {
    return(
        <View style={styles.DemoPageLayout}>
            <Text style={styles.BaseText}>Leaderboard Screen</Text>
        </View>
    )
}

function Profile() {
    return(
        <View style={styles.DemoPageLayout}>
            <Text style={styles.BaseText}>Profile Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    BaseText: {
        color:"#15F4EE"
    },

    DemoPageLayout:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})