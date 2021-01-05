import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";


const Login = () => {
    return(
        <View style={styles.container}>
            <Logo size="large"/>
            <LoginForm/>
            <Text style={styles.baseText}>Don't have an account yet? Register</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#000000"
    },

    baseText: {
        flex: 1,
        color:"#15F4EE",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Login