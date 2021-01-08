import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from "../pages/HomePage";
import LocationInformation from "../pages/LocationInformation"
import User from "../pages/User"

const Stack = createStackNavigator();

export default function HomeStack() {
    return(
        <Stack.Navigator>
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
                options={{
                    title:"LocationInformation",
                    headerShown: false
                }}
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