import React, { Component }from 'react'
import {View, Text, StyleSheet,} from "react-native"
import List from "../components/List"


export default function OverviewScreen() {
    return (
    <View>
        <View style={styles.container}>
            <Text style={styles.text}>
                test
            </Text>
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        margin:50,
    },

    text: {
        fontSize:20,
    }
})