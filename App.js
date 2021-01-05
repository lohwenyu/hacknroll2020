import React from 'react';
import Button from './src/components/Button';
import { View, StyleSheet } from "react-native";
import CourtOccupany from './src/components/CourtOccupancy';

export default function App() {
    return (
        <View style={styles.container}>
            <CourtOccupany playerCount={22}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#000000"
    }
})