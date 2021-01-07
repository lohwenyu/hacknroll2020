import React from 'react';
import { StyleSheet, View } from 'react-native';

import InputBox from "./InputBox";
import Button from "./Button";

export default function SignupForm() {
    return(
        <View style={styles.container}>
            <InputBox name="Username"/>
            {/* Havent put error for email */}
            <InputBox name="Email"/>
            <InputBox name="Password" password={true}/>
            <Button name="Sign Up" color="blue"/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems:"center",
    },
});