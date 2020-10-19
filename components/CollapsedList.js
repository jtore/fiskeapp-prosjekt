import React, {useState, useRef, Children } from "react";
import { 
  Text, 
  View, 
  StyleSheet, 
  Image, 
  SafeAreaView, 
  ScrollView, 
  Linking}

  from "react-native";

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

       
          <CollapsedView title="Haukelandsvannet - ørret og gjeddefisk">
            <View style = {styles.container}>
              <View style = {styles.textContainer}>
                <Text>
                  <Text style = {styles.text}> 
                  Haukelandsvatnet er et vann i gamle Arna kommune, 
                  nå Bergen kommune. Haukelandsvatnet er en av vannkildene til 
                  Storelva (Bergen) som renner ut i Arnavågen, 
                  og det største vannet i Arnavassdraget. 
                  {"\n\n"}

                  <Text style={styles.boldText}>Område:</Text> 
                  Bergen Kommune, mellom Arna og Nesttun. 
                  {"\n\n"}

                  <Text style={styles.boldText}>Fiskekort:</Text> 
                  Det er ikke 
                  salg av fiskekort i vannet i pr dags dato.
                  {"\n\n"}

                  <Text style={styles.boldText}>Passer for:</Text> 
                  Fluefiske, tørrfluefiske, slukfiske, dorging, meiting.
                  {"\n\n"}

                  <Text style={styles.boldText}>Båt</Text>:
                  Det er gratis for Bergen Sportsfiskere sine medlemmer 
                  å bruke båten. Båten er plassert ved Myrbø Dyrepensjonat.  
                  {"\n\n"}
                  Det er også mulig å leie en båt av Dyrepensjonatet til kr 50
                  {"\n\n"}
                  Det er forbudt å bruke påhengsmotor i vannet!
                  {"\n\n"}


                  <Text style={styles.boldText}>
                    Diskutèr Haukelandsvannet:
                  </Text> 
                  {"\n"}
                  Tips, råd, erfaringer
                  {"\n\n"}
                  Les og diskuter Haukelandsvannet i {""}
                  <Text style = {styles.bsfFacebookURL} 
                    onPress={() => 
                      Linking.openURL(
                      'https://www.facebook.com/groups/bergensportsfiskere/')}>
                        Facebook forum</Text>
                  </Text>
                </Text>  
              </View>

              <View style = {styles.fishwaterPhoto}>
                <Image 
                source={require("../images/haukelandsvannet.jpeg")}
                />
                <Text style = {styles.photoSource}>
                  Haukelandsvannet {"\n"}
                  Bergen Sportsfiskeklubb
                </Text>
              </View>
          
          </View>
        </CollapsedView> 
            
            <CollapsedView title="Nesttunvatnet">
              <View style = {styles.container}>
                <View style = {styles.textContainer}>
                  <Text style = {styles.text}>
                  I Nesttunvatnet finnes bestander av ørret, gjedde og abbor. 
                  Vannet ligger sentralt til på Nesttun og 
                  deler av vannet er lett tilgjengelig. 
                  Utløpene av Nesttunelva og Sandalselva er gode fiskeplasser. 
                  {"\n\n"}
                  Deler av strandsonen langs Nesttunvatnet eies av Bergen kommune.
                  I 2012 gjennomførte Hop ungdomsskole et prøvefiske i vannet og de 
                  ble fanget både stor abbor og gjedde.
                  </Text>
                </View>
                <View style = {styles.fishwaterPhoto}>
                  <Image 
                  source={require("../images/nesttunvannet.jpg")}/>
                  <Text style = {styles.photoSource}>
                    Nesttunvannet{"\n"}
                    JM
                  </Text>
               </View>

              </View>
            </CollapsedView>
            
            <CollapsedView title="Nordåsvannet">
            <View style = {styles.container}>
              <View style = {styles.textContainer}>
                <Text>
                  <Text style = {styles.text}> 

                  <Text style={styles.boldText}>Område: </Text> 
                  Nordåsvannet er en fjordarm i bydelene Fana, Fyllingsdalen
                  og Ytrebygda i Bergen kommune. 
                  {"\n\n"}
                  Fjorden har tilsig av ferskvann fra tre større elver 
                  og flere små bekker, med Nesttunvassdraget som det viktigste
                  {"\n\n"}

                  <Text style={styles.boldText}>Fiskekort: Nei</Text> 
                  {"\n\n"}

                  <Text style={styles.boldText}>Passer for:</Text> 
                  {"\n\n"}
                  Laks, Havabbor,
                  Lyr, Sei, Makrell og Torsk
                      
                  {"\n\n"}
                  <Text style={styles.boldText}>Kilder:</Text>
                  {"\n"}
                  https://www.fiskeguiden.no/8-fiskeplasser/
                  9446-nordasvannet-9446
                  {"\n\n"}
                  https://www.wikiwand.com/no/Nord%C3%A5svannet
                  </Text>
                </Text>  
              </View>

              <View style = {styles.fishwaterPhoto}>
                <Image 
                source={require("../images/nordasvatnet.jpg")}/>
                <Text style = {styles.photoSource}>
                  Nordåsvannet {"\n"}
                  Wikipedia
                </Text>
              </View>
          
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
     borderWidth:StyleSheet.hairlineWidth,
     borderColor:"black",
    },
    
    collapsibleItem: {
      color:"black",
    },

    text: {
      fontFamily: "Roboto",
    },
    textContainer: {
      flex:1,
      padding: 20,
    },

    bsfFacebookURL: {
      color: "blue",
    },

    boldText:{
      fontWeight: "bold",
    },

      fishwaterPhoto: {
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:"black",
        padding: 20,
      },
      photoSource: {
        fontStyle: "italic"
      }
    
  });