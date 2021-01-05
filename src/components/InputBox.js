import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, TextInput } from 'react-native';

const InputBox = ({name}) => {
    return (
        <TextInput
        placeholder={name}
        style={styles.boxStyle}
        color="#15F4EE"
        placeholderTextColor="#15F4EE"
        />
    )
};

const dimensions = Dimensions.get("window");
const deviceWidth = dimensions.width;

const styles = StyleSheet.create({
    boxStyle: {
        height: 35,
        width: deviceWidth * 0.8,
        borderColor: "#15F4EE",
        color: "#15F4EE",
        borderWidth: 1,
        borderRadius: 7,
        marginVertical: 5,
        paddingHorizontal: 5,
        fontSize: 20
    },

});





export default InputBox