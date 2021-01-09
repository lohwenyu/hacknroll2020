import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView from 'react-native-maps';
import LocationDescription from "../components/LocationDescription";
import database from "../databaseExample";

import firebase from "firebase";

export default function HomePage({ navigation }) {

    // const [latitude, setLatitude] = useState(0);
    // const [longitude, setLongitude] = useState(0);

    // const getCoords = () => {
    //     navigator.geolocation.getCurrentPosition(
    //         position => {
    //             setLatitude(position.coords.latitude);
    //             setLongitude(position.coords.longitude);
    //             console.log("done")
    //     }, {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})
    // }

    // getCoords()
    // console.log(latitude);
    // console.log(longitude)

    const onNavigate = (courtId, address) => {
        navigation.navigate("LocationInformation", {courtId: courtId, address: address})
    }

    var currUser = firebase.auth().currentUser;
    var ref = firebase.database().ref('/Courts');
    // var newMarker = ref.push();
    // newMarker.set({
    //     "Address": "4C St George's Ln, Singapore 322004",
    //     "Coordinates": {
    //         "Latitude": 1.3242039726320411, 
    //         "Longitude": 103.86182203406368,
    //     },
    // })

    const [courts, setCourts] = useState({});

    useEffect(() => {
        firebase.database().ref("/Courts").on("value", snapshot => {
            let data = snapshot.val()
            let courtItems = {...data}
            setCourts(courtItems)
        })
        return () => {
            firebase.database().ref("/Courts").off()
        }
    }, [currUser])

    // let courts = database["Courts"]
    let courtKeys = Object.keys(courts);
    console.log(courtKeys)

    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 1.3521,
                    longitude: 103.8198,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }}
            >
                {
                    courtKeys.map((key) => (
                        <MapView.Marker
                            key={key}
                            coordinate={{
                                latitude: courts[key]["Coordinates"]["Latitude"],
                                longitude: courts[key]["Coordinates"]["Longitude"]
                            }}
                            onCalloutPress={() => onNavigate(key, courts[key]["Address"])} // do the navigation here
                        >
                            <MapView.Callout>
                                <LocationDescription court={courts[key]}/>
                            </MapView.Callout>
                        </MapView.Marker>
                    ))
                }
            </MapView>
        </View>
    );
}

const dimensions = Dimensions.get("window");
const deviceWidth = dimensions.width;
const deviceHeight = dimensions.height;
const aspectRatio = deviceWidth/deviceHeight;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * aspectRatio;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    map: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }
})