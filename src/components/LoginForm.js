import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import InputBox from "./InputBox";
import Button from "./Button";

const LoginForm = () => {
    return(
        <View style={styles.container}>
            <InputBox name="Username"/>
            <InputBox name="Password"/>
            <Button name="Submit" color="blue"/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
        },
});

export default LoginForm