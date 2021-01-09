import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from "../pages/HomePage";
import LocationInformation from "../pages/LocationInformation"
import User from "../pages/User"
import Header from "../components/Header";

const Stack = createStackNavigator();

export default function HomeStack() {
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#000000"
                }
            }}
        >
            <Stack.Screen
                name="Homepage"
                component={HomePage}
                options={{
                    title:"HomePage",
                    headerShown: false,
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

            <Stack.Screen
                name="User"
                component={User}
                options={{
                    title:"User",
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}