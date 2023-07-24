import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Dimensions, StyleSheet, View } from "react-native";
import MapViewDirections from "react-native-maps-directions";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_LAT = 40.761973;
const INITIAL_LNG = -73.982662;
const INITIAL_POSITION = {
    latitude: INITIAL_LAT,
    longitude: INITIAL_LNG,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
};

const ORIGIN = {
    latitude: 40.761973,
    longitude: -73.982662,
};

const DESTINATION = {
    latitude: 40.751727,
    longitude: -73.947029,
};

export default function App() {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={INITIAL_POSITION}
            >
                <Marker coordinate={ORIGIN} />
                <Marker coordinate={DESTINATION} />
                <MapViewDirections
                    origin={ORIGIN}
                    destination={DESTINATION}
                    apikey={"[YOUR GOOGLE API KEY HERE]"}
                    strokeWidth={5}
                    strokeColor="hotpink"
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: "100%",
        height: "100%",
    },
});
