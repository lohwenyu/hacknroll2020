import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView from 'react-native-maps';
import LocationDescription from "../components/LocationDescription";
import database from "../databaseExample";

export default function HomePage() {

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const getCoords = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
                console.log("done")
        }, {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})
    }

    getCoords()
    console.log(latitude);
    console.log(longitude)

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
                <MapView.Marker
                    coordinate={{latitude: 1.3337286161508455, 
                    longitude: 103.8670577060402}}
                    title={"6 Potong Pasir Ave 2, Singapore 358361"}
                    description={"View More"}
                    onPress={() => console.log("onpress")}
                    onCalloutPress={() => {console.log("oncallout")}}
                >
                    <MapView.Callout>
                        <LocationDescription court={database["Courts"]["CourtID1"]}/>
                    </MapView.Callout>
                </MapView.Marker>
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