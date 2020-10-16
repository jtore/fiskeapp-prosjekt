import React, {useState} from "react";
import {Button, View, StyleSheet} from "react-native";
import Collapsible from "react-native-collapsible"


export default function CollapsedView(props) {

    const[collapsed, setCollapsed] = useState(false);
  
    return (
        <View style = {styles.container}>
            <Button 
                title={props.title} 
                onPress={() => setCollapsed(!collapsed)} 
                color = {styles.button.color}
            />
            <Collapsible collapsed={collapsed}>
                {props.children}
            </Collapsible>
        </View>
    );
    }


    const styles = StyleSheet.create({

        container: {
            marginTop: 20,

        },


        button: {
            marginTop: 20,
            color: "darkgreen"
        }
      });