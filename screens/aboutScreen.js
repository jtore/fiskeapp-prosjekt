import React from 'react'
import {View, Text, StyleSheet} from "react-native"

export default function AboutScreen() {
    return (
        <View>
            <Text style={styles.text}>Laget av Einar, Mads og Joakim</Text>
    
        </View>
    )

}

const styles = StyleSheet.create({
    text: {
    fontSize:20,
    
    }
})