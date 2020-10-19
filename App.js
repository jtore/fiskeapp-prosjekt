import React from 'react'
import { View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SimpleLineIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

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
                name = "Waters for fishing" 
                component = {DisplayOverviewScreen}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome5 name="water" size={24} color="royalblue" />
                    )
                }}/>
                <Tab.Screen 
                name = "Tools" 
                component = {DisplayAboutScreen}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome5 name="tools" size={24} color="black" />
                    )
                }}/>
            </Tab.Navigator>
        </NavigationContainer> 
    );
}




