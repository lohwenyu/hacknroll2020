import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, TextInput} from 'react-native';
import database from '../databaseExample';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { color } from "react-native-reanimated";

import Button from "../components/Button"

// editing username changes userId?
export default function EditProfile({ userId }) {

    const userInfo = database["Users"][userId]

    return (
        <View style={styles.pageContainer}>
            {/* edit image */}
            <TouchableOpacity
                onPress={() => {}}
            >
                <View style={styles.displayPictureContainer}>
                    <Image
                        source={userInfo["DisplayPicture"]} 
                        style={styles.displayPicture}
                        imageStyle={{borderRadius:1000}}
                    />
                </View>
            </TouchableOpacity>
            
            <Text style={styles.updatePrompt}>Update Your Profile</Text>
            <TextInput 
                placeholder={userInfo["Name"]}
                placeholderTextColor="#ffffff"
                style={styles.usernameText}/>
            <Text style={styles.userIdText}>#{userId}</Text>
            <TextInput 
                placeholder={userInfo["Email"]}
                placeholderTextColor="#ffffff"
                style={[styles.usernameText, {marginBottom: 10}]}/>
            <Button name="Submit" color="green"/>

        </View>
    );
}

const dimensions = Dimensions.get("window");
const deviceWidth = dimensions.width;
const deviceHeight = dimensions.height;

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000"
    },
    displayPictureContainer: {
        width: deviceWidth * 0.5,
        marginBottom: 10
    },
    displayPicture: {
        width: "100%",
        height: undefined,
        aspectRatio: 1/1,
        borderRadius: 1000
    },
    updatePrompt: {
        fontSize: 20,
        color: "#15F4EE",
        marginBottom: 10
    },
    usernameText: {
        fontSize: 20,
        color: "#ffffff"
    },
    userIdText: {
        fontSize: 14,
        marginBottom: 10,
        color: "#ffffff",
        fontWeight: '400'        
    },

})