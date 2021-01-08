import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import InputBox from "./InputBox";
import Button from "./Button";

import firebase from "firebase";
import { useNavigation } from '@react-navigation/native';

export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <InputBox name="Email" onChangeText={(email) => setEmail(email)}/>
            <InputBox name="Password" password={true} onChangeText={(password) => setPassword(password)}/>
            <Button name="Log In" color="blue" onPress={() => loginUser(email, password, navigation)}/>
        </View>
    )
};

function loginUser(email, password, navigation) {
    try {
        firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
            console.log(user)
            navigation.navigate("NavBar");
        })
    } catch (error) {
        console.log(error.toString())
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems:"center",
    },
});