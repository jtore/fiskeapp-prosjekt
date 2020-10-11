import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Dimensions, Text,TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from "react-native-maps";


export default function MapScreen() {
    
    return <MapView style={styles.map}        
        /* Setter startplass til Bergen sentrum */
        initialRegion={{
        latitude: 60.397076,
        longitude: 5.324383,
        latitudeDelta: 0.0491,
        longitudeDelta: 0.0375,
        }}
        >
        <MapView.Marker
            coordinate={{latitude:60.397076, longitude: 5.324383}}
            title = {"Bergen!"}
            description = {"Test test"}
        />
    </MapView>
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    },
    map: {
    ...StyleSheet.absoluteFillObject,
    },
   });