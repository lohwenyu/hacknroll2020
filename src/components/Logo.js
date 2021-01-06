import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function Logo({ size }) {
    if (size == "large") {
        return (
            <View style={styles.container}>
                <Image
                style={styles.imgLarge}
                source={require("../images/LogoV1.png")}
                />
            </View>
        );
    } else if (size == "medium") {
        return (
            <View style={styles.container}>
                <Image
                style={styles.imgMedium}
                source={require("../images/LogoV1.png")}
                />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Image
                style={styles.imgSmall}
                source={require("../images/LogoV1.png")}
                />
            </View>
        )
    } 
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems:"center",
    },

    imgLarge: {
        width: 300,
        height: 300,
        justifyContent: "center",
        alignItems: "center"
    },

    imgMedium: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center"
    },

    imgSmall: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    }
});