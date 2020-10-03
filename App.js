import React from 'react'
import { View, Text, Button} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();


function HomeScreen(){
    return(
        <View style = {{flex:1, alignItems:"center", justifyContent:"center"}}>
            <Text>Home Screen</Text>
        </View>
    );
}

function AboutScreen(){
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About screen</Text>
    </View>
    );
}


export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRoutenName = "Home">
                <Tab.Screen name = "Home" component = {HomeScreen}/>
                <Tab.Screen name = "About" component = {AboutScreen}/>
            </Tab.Navigator>
        </NavigationContainer> 
    );
}




