import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";

const Stack = createStackNavigator();

export default function ProfileStack({navigation}) {

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        title:"Profile",
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="EditProfile"
                    component={EditProfile}
                    options={{
                        title:"EditProfile",
                        headerShown: false
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}





