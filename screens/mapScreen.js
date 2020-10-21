import React, { Component } from 'react';
import {StyleSheet, View, Dimensions, Text,TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE,} from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
         /** Haukelandsvannet **/
            key = {2}
            coordinate={{latitude:60.365616, longitude: 5.469325}}
            title = {"Haukelandsvannet"}
            image = {require("../images/fisk.png")}
            >
            <MapView.Callout style={styles.plainView}>
                <View>
                    <Text>
                    <Text style = {styles.boldText}>Haukelandsvannet</Text>
                    {"\n\n"}
                    <Text style = {styles.boldText}>Fiskekort:</Text>
                    Det er ikke salg av fiskekort i vannet i pr dags dato.
                    {"\n\n"}
                    <Text style = {styles.boldText}>Passer for:</Text>
                    Fluefiske, tørrfluefiske, slukfiske, dorging, meiting.
                    </Text>
                </View>
            </MapView.Callout>

        </MapView.Marker>


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
            description = {"Fiskeart: Ørret"}
            image = {require("../images/fisk.png")}
        />
         

        <MapView.Marker
        /** Liavatnet i Åsane **/
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
    ...StyleSheet.absoluteFill,
    },

    plainView: {
        width:200,
        position: "absolute"
          },

    boldText:{
    fontWeight: "bold",
    },


   });