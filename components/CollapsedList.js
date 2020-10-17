import React, {useState, useRef, Children } from "react";
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
              
              <View style = {styles.textcontainer}>
              <Text style = {styles.infoText}> 
              Haukelandsvatnet er et vann i gamle Arna kommune, nå Bergen kommune. 
              Haukelandsvatnet er en av vannkildene til Storelva (Bergen) som renner
              ut i Arnavågen, og det største vannet i Arnavassdraget
              </Text>
            </View>
          <View style = {styles.fishwaterPhoto}>
            <Image 
            source={require("../images/haukelandsvannet.jpeg")}/>
            <Text style = {styles.photoSource}>
              Haukelandsvannet {"\n"}
              Bergen Sportsfiskeklubb
              </Text>
          </View>
          
          </View>
            </CollapsedView> 
            
            <CollapsedView title="Nesttunvatnet">
              <View style = {styles.container}>
                <Text style = {styles.text}>
                I Nesttunvatnet finnes bestander av ørret, gjedde og abbor. 
                Vannet ligger sentralt til på Nesttun og deler av vannet er lett 
                tilgjengelig. 
                Utløpene av Nesttunelva og Sandalselva er gode fiskeplasser. 
                Deler av strandsonen langs Nesttunvatnet eies av Bergen kommune.
                I 2012 gjennomførte Hop ungdomsskole et prøvefiske i vannet og de 
                ble fanget både stor abbor og gjedde
                </Text>
              </View>
            </CollapsedView>
            
            <CollapsedView title="">
              <View>
              <Text>Test</Text>
              </View>
            </CollapsedView>
            
             
            <CollapsedView title="">
              <View>
              <Text>Test</Text>
              </View>
            </CollapsedView>

             
            <CollapsedView title="">
              <View>
              <Text>Test</Text>
              </View>
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
    },

    text: {
      fontFamily: "Roboto",
    },

    textcontainer: {
      padding: 20,
      
    },

    fishwaterPhoto: {
      borderWidth:1,
      borderColor:"black",
      padding: 20,
    },

    photoSource: {
      fontStyle: "italic"
    }
    
  });