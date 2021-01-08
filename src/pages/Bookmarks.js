import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import BookmarkedCourt from "../components/BookmarkedCourt";

import database from "../databaseExample";

export default function Bookmarks({navigation}) {
    
    // userId hardcoded 
    let bookmarkKeys = database["Users"]["UserID2"]["Bookmarks"];

    return (
        <ScrollView style={styles.container}>
                {
                    bookmarkKeys.length > 0 ? (
                        bookmarkKeys.map((key) => (
                            <View style={styles.innerContainer}>
                                <View key={key} style={styles.individualBookmark}>
                                    <BookmarkedCourt 
                                        court={database["Courts"][key]}
                                        onPress={() => navigation.navigate(
                                            "LocationInformation", {
                                                courtId: key
                                            }
                                        )}
                                    />
                                </View>
                            </View>
                        ))
                    ) : (
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>No bookmarks found.</Text>
                        </View>
                    )
                }
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
        flex: 1,
        color: "#15F4EE",
        fontSize: 20,
        fontWeight: "600",
        alignItems: "center",
        justifyContent: "center"
    },
    emptyContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});