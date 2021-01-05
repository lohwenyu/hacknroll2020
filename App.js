import React from 'react';
import Button from './src/components/Button';
import { View, StyleSheet } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Button name="Start Game" color="red"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
    }
})