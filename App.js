import React from 'react'
import { View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons } from '@expo/vector-icons'; 

import MapScreen from "./screens/mapScreen";
import AboutScreen from "./screens/aboutScreen"
import OverviewScreen from "./screens/overviewScreen"



const Tab = createBottomTabNavigator()


function DisplayMapScreen(){
    return(
        <View style = {{flex:1, alignItems:"center", justifyContent:"center"}}>
            <MapScreen/>
        </View>
    );
}

function DisplayOverviewScreen(){
    return (
    <View>
        <OverviewScreen/>
    </View>
    );
}


function DisplayAboutScreen(){
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <AboutScreen/>
    </View>
    );
}


export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator 
            initialRoutenName = "Map"
            tabBarOptions ={{
                activeTintColor: "green"
            }}
            >
                <Tab.Screen 
                name = "Map" 
                component = {DisplayMapScreen}
                options ={{
                    tabBarIcon: () => (
                        <SimpleLineIcons name="map" size={24} color="black" />
                    )
                }}
                />
                <Tab.Screen 
                name = "Overview" 
                component = {DisplayOverviewScreen}
                options={{
                    tabBarIcon: () => (
                        <SimpleLineIcons name="list" size={24} color="black" />
                    )
                }}/>
                <Tab.Screen 
                name = "About" 
                component = {DisplayAboutScreen}
                options={{
                    tabBarIcon: () => (
                        <SimpleLineIcons name="info" size={24} color="black"/>
                    )
                }}/>
            </Tab.Navigator>
        </NavigationContainer> 
    );
}




