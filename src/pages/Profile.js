import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

import Button from '../components/Button';
import GeneralStatistics from '../components/GeneralStatistics';

export default function Profile({navigation}) {
    // change userId placeholder
    return(
        <View style={styles.container}>
            <View style={{marginBottom: deviceHeight * 0.05}}>
                <GeneralStatistics userId={"UserID2"}/>
            </View>
            <Button 
                name={"Update Profile"}
                onPress={() => navigation.navigate("EditProfile")}
            />
        </View>
    )
}

const dimensions = Dimensions.get("window");
const deviceWidth = dimensions.width;
const deviceHeight = dimensions.height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000"
    },
})
