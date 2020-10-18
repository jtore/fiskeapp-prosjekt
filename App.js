import React from 'react'
import { View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SimpleLineIcons } from '@expo/vector-icons'; 

import MapScreen from "./screens/mapScreen";
import AboutScreen from "./screens/aboutScreen"
import OverviewScreen from "./screens/overviewScreen"



function DisplayMapScreen({ navigation }){
    return(
        <View style = {{flex:1, alignItems:"center", justifyContent:"center"}}>
            <MapScreen/>
        </View>
    );
}

function DisplayOverviewScreen({ navigation } ){
    return (
    <View>
        <OverviewScreen/>
    </View>
    );
}


function DisplayAboutScreen({ navigation }){
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <AboutScreen/>
    </View>
    );
}


const MapStack = createStackNavigator();

function MapStackScreen() {
  return (
    <MapStack.Navigator>
      <MapStack.Screen name="Map" component={DisplayMapScreen} />
      <MapStack.Screen name="Information" component={DisplayOverviewScreen} />
    </MapStack.Navigator>
  );
}



const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator 
            initialRouteName = "Map"
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
                name = "Information" 
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




