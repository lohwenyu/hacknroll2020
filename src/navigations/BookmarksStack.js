import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Bookmarks from "../pages/Bookmarks"
import LocationInformation from "../pages/LocationInformation"
import Header from "../components/Header";

const Stack = createStackNavigator();

export default function BookmarksStack() {
    return (
        // If no navigation container will throw error
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#000000"
                }
            }}
        >
            <Stack.Screen
                name="Bookmarks"
                component={Bookmarks}
                options={{
                    title:"Bookmarks",
                    headerTitleStyle: {
                        color: "#15F4EE"
                    },
                    headerLeft: null,
                    gestureEnabled: false
                }}
            />

            <Stack.Screen
                name="LocationInformation"
                component={LocationInformation}
                options={({route}) => ({
                    title: (
                        <Header address={route.params.address}/>
                    ),
                    headerBackTitleVisible: false,
                    headerTintColor: "#15F4EE",
                    headerTitleAlign: "left"
                })}
            />
        </Stack.Navigator>
    )
}
