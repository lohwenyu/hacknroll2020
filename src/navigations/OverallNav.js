import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NavBar from "./navBar";
import LandingStack from "./landingStack";

const Stack = createStackNavigator();
export default function OverallNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="LandingStack"
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: false
                }}
            >
                <Stack.Screen
                    name="LandingStack" 
                    component={LandingStack}
                    
                />
                <Stack.Screen
                    name="NavBar"
                    component={NavBar}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}