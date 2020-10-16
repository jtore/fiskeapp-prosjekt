import React, { Component, useState }from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native"


export default function OverviewScreen() {
    return (
    <View>
        <View style={styles.container}>
            <FlatList
            data= {[
                {key: "Vann1"},
                {key: "Vann2"},
                {key: "Vann3"},
            ]}
            renderItem = {({item}) => 
            <Text style = {styles.text}>{item.key}
            </Text>}
            />
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
    container:{
        margin:50,
        alignContent: "center",
    },

    text: {
        fontSize:30,
        borderWidth:2,
        alignItems:"center",
        paddingLeft: 80,
    }
})