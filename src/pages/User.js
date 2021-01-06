import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import Button from '../components/Button';
import GeneralStatistics from '../components/GeneralStatistics';

export default function User({ user, known }) {
    if (known) {
        return (
            <View style={styles.container}>
                <GeneralStatistics user={user}/>
                <View style={styles.buttonContainer}>
                    <Button name="Chat" color="blue"/>
                    <Button name="Form Teams" color="blue"/>
                </View>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <GeneralStatistics user={user}/>
                <View style={styles.buttonContainer}>
                    <Button name="Add User" color="blue"/>
                    <Button name="Chat" color="blue"/>
                    <Button name="Form Teams" color="blue"/>
                </View>
            </View>
        );
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