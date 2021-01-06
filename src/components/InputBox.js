import React from 'react';
import { Dimensions, StyleSheet, TextInput } from 'react-native';

export default function InputBox({ name, password }) {
    return (
        <TextInput
            placeholder={name}
            style={styles.boxStyle}
            color="#15F4EE"
            placeholderTextColor="#15F4EE"
            secureTextEntry={password}
        />
    )
};

const dimensions = Dimensions.get("window");
const deviceWidth = dimensions.width;

const styles = StyleSheet.create({
    boxStyle: {
        height: 40,
        width: deviceWidth * 0.8,
        borderColor: "#15F4EE",
        color: "#15F4EE",
        borderWidth: 1,
        borderRadius: 7,
        marginVertical: 5,
        paddingHorizontal: 10,
        fontSize: 16
    },

});