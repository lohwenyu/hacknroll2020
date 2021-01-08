import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import Button from '../components/Button';
import GeneralStatistics from '../components/GeneralStatistics';

export default function User({ userId, known, teamedUp }) {
    if (!known) {
        return (
            <View style={styles.container}>
                <GeneralStatistics userId={userId}/>
                <View style={styles.buttonContainer}>
                    <Button name="Add User" color="blue"/>
                </View>
            </View>
        );
    } else {
        if (!teamedUp) {
            return (
                <View style={styles.container}>
                    <GeneralStatistics userId={userId}/>
                    <View style={styles.buttonContainer}>
                        <Button name="Chat" color="blue"/>
                        <Button name="Form Teams" color="blue"/>
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <GeneralStatistics userId={userId}/>
                    <View style={styles.buttonContainer}>
                        <Button name="Chat" color="blue"/>
                        <Button name="Kick Player" color="red"/>
                    </View>
                </View>
            );
        }
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#000000"
    },
    buttonContainer: {
        marginTop: 50
    }
});