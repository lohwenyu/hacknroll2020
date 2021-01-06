import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import BookmarkedCourt from "../components/BookmarkedCourt";

import database from "../databaseExample";

export default function Bookmarks({ user }) {

    let bookmarkKeys = user["Bookmarks"];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.innerContainer}>
                {
                    bookmarkKeys.length > 0 ? (
                        bookmarkKeys.map((key) => (
                            <View key={key} style={styles.individualBookmark}>
                                <BookmarkedCourt court={database["Courts"][key]}/>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.emptyText}>No bookmarks found.</Text>
                    )
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#000000"
    },
    innerContainer: {
        alignItems: "center"
    },
    individualBookmark: {
        marginVertical: 10
    },
    emptyText: {
        fontSize: 20,
        fontWeight: "600"
    }
});