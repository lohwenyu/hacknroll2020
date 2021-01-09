import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Header({ address }) {
    return (
        <View style={styles.container}>
            <Text style={styles.topText}>CURRENTLY VIEWING</Text>
            <Text style={styles.addressText}>{address}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center"
    },
    topText: {
        color: "#15F4EE",
        fontSize: 13
    },
    addressText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "400"
    }
})