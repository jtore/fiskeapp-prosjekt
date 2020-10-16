import React, { Component }from 'react'
import {View, Text, StyleSheet, FlatList} from "react-native"
import OverviewList from "../components/CollapsedList";

export default function OverviewScreen() {
    return (
    <View>
        <View style={styles.container}>
          <OverviewList/>
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
    }
})