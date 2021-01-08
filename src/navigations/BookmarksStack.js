import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Bookmarks from "../pages/Bookmarks"
import LocationInformation from "../pages/LocationInformation"

const Stack = createStackNavigator();

export default function BookmarksStack() {
    return (
        // If no navigation container will throw error
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Bookmarks"
                    component={Bookmarks}
                    options={{
                        title:"Bookmarks",
                        headerShown: false
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}
