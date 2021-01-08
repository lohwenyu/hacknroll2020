import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import InputBox from "./InputBox";
import Button from "./Button";

import firebase from "firebase";
import { useNavigation } from '@react-navigation/native';

export default function SignupForm() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <InputBox name="Username" onChangeText={(username) => setUsername(username)}/>
            {/* Havent put error for email */}
            <InputBox name="Email" onChangeText={(email) => setEmail(email)}/>
            <InputBox name="Password" password={true} onChangeText={(password) => setPassword(password)}/>
            <Button name="Sign Up" color="blue" onPress={() => signupUser(navigation, email, password, username)}/>
        </View>
    )
};

function signupUser( navigation, email, password, username) {
    try {
        if (password.length < 6) {
            alert("Please enter at least 6 characters.");
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredentials) => {
            console.log(userCredentials.user.uid);
            navigation.navigate("NavBar");
            firebase.database().ref("/Users/" + userCredentials.user.uid).set({
                "Name": username,
                "GamesPlayed": 0,
                "Won": 0,
                "Lost": 0,
                "AveragePPG": 0,
                "DisplayPicture": require("../images/placeholder.png"),
                "Bookmarks": []
            })
        });
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