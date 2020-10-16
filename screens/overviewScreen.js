import React, { Component }from 'react'
import {View, Text, StyleSheet, FlatList} from "react-native"
import List from "../components/List"


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
    }
})