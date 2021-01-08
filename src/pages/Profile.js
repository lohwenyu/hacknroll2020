import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import Button from '../components/Button';
import GeneralStatistics from '../components/GeneralStatistics';

// editing username changes userId?
export default function Profile({userId}) {
    return(
        <View style={styles.container}>
            <GeneralStatistics userId={userId}/>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000"
    },
})
