import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "../pages/LoginPage";
import Signup from "../pages/SignupPage";

const Stack = createStackNavigator();

export default function LoginStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LoginPage"
                component={Login}
                options={{
                    title:"LoginPage",
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="SignupPage"
                component={Signup}
                options={{
                    title:"SignupPage",
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}
