import React, { Component, useState, useRef } from "react";
import { Text, View, StyleSheet, buttonText, Button, Image} from "react-native";
import CollapsedView from "../components/collapsedView"
import { SearchBar } from 'react-native-elements';



export default function OverviewList() {

  const [search, setSearch] = useState("")

  const listRef = useRef(null)


  function updateSearch(query) {
    setSearch(query)

  }

    return (
      <View>
        <SearchBar
          placeholder = "HMMMM..."
          onChangeText = {updateSearch}
          value = {search}
        />

        <View>
        <CollapsedView title="Haukelandsvannet">
          <Text>
            Haukelandsvatnet er et vann i gamle Arna kommune, nå Bergen kommune. 
            Haukelandsvatnet er en av vannkildene til Storelva (Bergen) som renner
            ut i Arnavågen, og det største vannet i Arnavassdraget</Text>
          <Image source={require("../images/forbudtskilt.png")} />
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
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
     
    },
    collapsibleItem: {
      
    }
  });