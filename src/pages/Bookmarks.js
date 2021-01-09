import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import BookmarkedCourt from "../components/BookmarkedCourt";

import firebase from "firebase";

export default function Bookmarks({navigation}) {
    
    // userId hardcoded 
    var currUser = firebase.auth().currentUser.uid;

    const [bookmarks, setBookmarks] = useState({});

    useEffect(() => {
        firebase.database().ref("/Users/" + currUser).child("Bookmarks").on("value", snapshot => {
            let data = snapshot.val()
            if (data != null) {
                let bookmarkItems = {...data}
                setBookmarks(bookmarkItems)
            }
        })
        return () => {
            firebase.database().ref("/Users/" + currUser).off()
        }
    }, [])

    let bookmarkKeys = Object.keys(bookmarks);

    return (
        <ScrollView style={styles.container}>
                {
                    bookmarkKeys.length > 0 ? (
                        bookmarkKeys.map((key) => (
                            <View key={key} style={styles.innerContainer}>
                                <View style={styles.individualBookmark}>
                                    <BookmarkedCourt 
                                        courtId={key}
                                        onPress={() => navigation.navigate(
                                            "LocationInformation", {
                                                courtId: key,
                                                address: bookmarks[key]["Address"] //cannot
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