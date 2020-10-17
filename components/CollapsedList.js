import React, { Component, useState, useRef, Children } from "react";
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView} from "react-native";
import CollapsedView from "../components/collapsedView"
import { SearchBar } from 'react-native-elements';



export default function OverviewList() {

  const [search, setSearch] = useState("")

  const listRef = useRef(null)


  function updateSearch(query) {
    setSearch(query)

  }

    return (
      <SafeAreaView>
        <ScrollView>
      <View>
        <SearchBar
          placeholder = "HMMMM..."
          onChangeText = {updateSearch}
          value = {search}
        />

       
          <CollapsedView title="Haukelandsvannet">
            <View style = {styles.container}>
              <Text> 
              Haukelandsvatnet er et vann i gamle Arna kommune, nå Bergen kommune. 
              Haukelandsvatnet er en av vannkildene til Storelva (Bergen) som renner
              ut i Arnavågen, og det største vannet i Arnavassdraget
              </Text>
          
          <View>
            <Image source={require("../images/forbudtskilt.png")} />
          </View>
          
          </View>
            </CollapsedView> 
            
            <CollapsedView title="Knapp2">
              <Text>Test</Text>
            </CollapsedView>
            
            <CollapsedView title="Knapp1">
              <Text>Test</Text>
            </CollapsedView>
            
            <CollapsedView title="Knapp2">
              <Text>Test</Text>
            </CollapsedView>

            <CollapsedView title="Knapp2">
              <Text>Test</Text>
            </CollapsedView>

            <CollapsedView title="Knapp2">
              <Text>Test</Text>
            </CollapsedView>


            <CollapsedView title="Knapp2">
              <Text>Test</Text>
            </CollapsedView>

            <CollapsedView title="Knapp2">
              <Text>Test</Text>
            </CollapsedView>

            <CollapsedView title="Knapp2">
              <Text>Test</Text>
            </CollapsedView>

            <CollapsedView title="Knapp2">
              <Text>Test</Text>
            </CollapsedView>

            <CollapsedView title="Knapp2">
              <Text>Test</Text>
            </CollapsedView>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
    flex:1,
     borderWidth:1,
     borderColor:"black",
    },
    
    collapsibleItem: {
      color:"black"  
    }
    
  });