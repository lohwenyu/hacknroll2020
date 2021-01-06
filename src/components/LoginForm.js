import React from 'react';
import { StyleSheet, View } from 'react-native';

import InputBox from "./InputBox";
import Button from "./Button";

export default function LoginForm() {
    return(
        <View style={styles.container}>
            <InputBox name="Username"/>
            <InputBox name="Password" password={true}/>
            <Button name="Submit" color="blue"/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems:"center",
    },
});