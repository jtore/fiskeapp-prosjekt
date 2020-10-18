import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Dimensions, Text,TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Callout } from 'react-native-maps';

export default function MapScreen() {
    
    return <MapView style={styles.map}        
        /* Setter startplass til Bergen sentrum */
        initialRegion={{
        latitude: 60.397076,
        longitude: 5.324383,
        latitudeDelta: 0.0491,
        longitudeDelta: 0.0375,
        }}

        showsUserLocation
        >
         
        <MapView.Marker
            // Bergen
            key = {1}
            coordinate={{latitude:60.397076, longitude: 5.324383}}
            title = {"Bergen"}
            description = {"Test test"}
            />
    
       

        <MapView.Marker
         /** Haukelandsvatnet **/
            key = {2}
            coordinate={{latitude:60.365616, longitude: 5.469325}}
            title = {"Haukelandsvatnet"}
            description = {"Haukelandsvatnet er et vann i gamle Arna kommune, nå Bergen kommune. Haukelandsvatnet er en av vannkildene til Storelva (Bergen) som renner ut i Arnavågen, og det største vannet i Arnavassdraget["}
            image = {require("../images/fisk.png")}
        />


         <MapView.Marker
         /** Nesttunvannet **/
            key = {3}
            coordinate={{latitude:60.323625, longitude: 5.352544}}
            title = {"Nesttunvannet"}
            description = {"Test test"}
            image = {require("../images/fisk.png")}
        />
        

        <MapView.Marker
         /** Nubbevatnet **/
            coordinate={{latitude:60.360326, longitude: 5.388181}}
            title = {"Nubbevatnet"}
            description = {"Test test"}
            image = {require("../images/fisk.png")}
        />
         

        <MapView.Marker
        /** Liavatnet **/
            coordinate={{latitude: 60.372849, longitude:  5.254294}}
            title = {"Liavatnet"}
            description = {"Test test"}
            image = {require("../images/fisk.png")}
        />

        <MapView.Marker
        /** Storelva:  **/
            coordinate={{latitude:60.405133, longitude: 5.472729}}
            title = {"Storelva"}
            description = {"Test test"}
            image = {require("../images/fisk.png")}
        />

        
        <MapView.Marker
        /** Jordalsvatnet FORBUDT**/
            coordinate={{latitude:60.434752, longitude:5.337876 }}
            title = {"Jordalsvatnet"}
            description = {"Nedbørsfelt, IKKE lovlig fiske"}
            image = {require("../images/forbudtskilt.png")}
        />



        <MapView.Marker
        /** Setervatnet FORBUDT**/
            coordinate={{latitude:60.440567 , longitude:5.364284 }}
            title = {"Setervatnet"}
            description = {"Nedbørsfelt, IKKE lovlig fiske"}
            image = {require("../images/forbudtskilt.png")}
        />



        <MapView.Marker
        /** Indrevatnet FORBUDT**/
            coordinate={{latitude:60.430686 , longitude:5.353811
            }}
            title = {"Indrevatnet"}
            description = {"Nedbørsfelt, IKKE lovlig fiske"}
            image = {require("../images/forbudtskilt.png")}
        />



        <MapView.Marker
        /** Øvre Jordalsvatnet FORBUDT**/
            coordinate={{latitude: 60.415950 , longitude:5.394317 }}
            title = {"Øvre Jordalsvatnet"}
            description = {"Nedbørsfelt, IKKE lovlig fiske"}
            image = {require("../images/forbudtskilt.png")}
        />



        <MapView.Marker
        /** Tarlebøvatnet FORBUDT**/
            coordinate={{latitude:60.411807 , longitude: 5.385995 }}
            title = {"Tarlebøvatnet"}
            description = {"Nedbørsfelt, IKKE lovlig fiske"}
            image = {require("../images/forbudtskilt.png")}
        />

        <MapView.Marker
        /** Store Tindevatnet FORBUDT**/
            coordinate={{latitude:60.405945 , longitude: 5.369000 }}
            title = {"Store Tindevatnet"}
            description = {"Nedbørsfelt, IKKE lovlig fiske"}
            image = {require("../images/forbudtskilt.png")}
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