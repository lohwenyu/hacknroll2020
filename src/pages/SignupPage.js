import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Logo from "../components/Logo";
import SignupForm from "../components/SignupForm";


export default function Signup({ navigation }) {
    return(
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Logo size="large"/>
                <SignupForm/>
            </View>
            <View style={styles.baseTextContainer}>
                <Text style={styles.baseText}>Don't have an account? </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("LoginPage")}
                >
                    <Text style={styles.registerText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        backgroundColor: "#000000"
    },
    formContainer: {
        flex: 0.8,
        // can try changing justifyContent see what happens
        justifyContent: "center",
        alignItems: "center"
    },
    baseTextContainer: {
        flex: 0.2,
        // can try changing alignItems see what happens 
        // (note: using alignItems instead of justifyContent because of flex direction)
        alignItems: "flex-start", 
        flexDirection: "row"
    },
    baseText: {
        color:"#15F4EE",
        fontSize: 16
    },
    registerText: {
        color:"#15F4EE",
        fontWeight: "bold",
        fontSize: 16
    }
});