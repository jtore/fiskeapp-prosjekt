import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Dimensions, Text,TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

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

export default function MapScreen() {
    return <MapView
 style={styles.map}
 initialRegion={{
 latitude: 25.6989,
 longitude: 32.6421,
 latitudeDelta: 0.0491,
 longitudeDelta: 0.0375,
}}>
</MapView>
};
