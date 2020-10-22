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
          placeholder = "Søk her..."
          onChangeText = {updateSearch}
          value = {search}
        />

      
          <CollapsedView title="Generelt om fisking i Bergensområdet">
            <View style = {styles.container}>
              <View style = {styles.textContainer}>
                <Text>
                Det er mange fiskevann og vassdrag i Bergen 
                hvor det er mulig å få fisk. Her er noen råd om ferskvannsfiske 
                og lett tilgjengelige fiskeplasser i Bergen.
                {"\n\n"}
                <Text style = {styles.boldText}>Artsmangfold:</Text>
                {"\n"}
                I ferskvann i Bergen finnes det, 
                i tillegg til de naturlige artene ørret, laks, ål og røye, 
                introduserte arter som gjedde, abbor, gullvederbuk og karuss.
                {"\n\n"} 
                De innførte artene er nok kommet for å bli, men det er viktig 
                å hindre ytterligere spredning av både innført og naturlig arter. 
                Det kreves tillatelse fra Fylkeskommunen for å sette ut fisk.
                {"\n\n"}
                Kilde: https://www.bergen.kommune.no/innbyggerhjelpen/natur
                -klima-miljo/natur/vassdrag/fritidsfiske-i-ferskvann
                </Text>
              </View>
            </View>
          </CollapsedView>
     


       
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
                  <Text style = {styles.URL} 
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

                  <Text style={styles.boldText}>Bestand:</Text> 
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
            
             
            <CollapsedView title="Nubbevannet">
              <View style = {styles.container}>
                <View style = {styles.textContainer}>
                  <Text>
                  Nubbevatnet er et lite fjellvann som ligger på Landåsfjellet.
                  En speidergruppe har satt ut ørret i vannet gjennom flere år.
                  Derfor finnes det en liten bestand av stor ørret i vannet.
                  {"\n\n"}
                  Vanlig størrelse på fisken er mellom 300-800g, 
                  men det er også fanget ørret på godt over kiloet.
                  {"\n\n"}
                  Siden det ikke er muligheter for naturlig rekruttering 
                  er vannet avhengig av jevnlig utsetting av ørret.
                  {"\n\n"}
                  Bergen kommune er grunneier rundt hele vannet, 
                  slik at det er åpent og gratis fiske for alle.
                  </Text>
                </View>
              </View>
            </CollapsedView>

             
            <CollapsedView title="Liavatnet i Åsane">
            <View style = {styles.container}>
                <View style = {styles.textContainer}>
                  <Text>
                    I Liavatnet finnes det relativt tette bestander av både 
                    røye og ørret. Størrelsen på 
                    fisken ligger i hovedsak mellom 100-200 gram, 
                    men det finnes nok større eksemplarer i vannet.
                    {"\n\n"}
                    Røyen er enklest å fiske om senhøsten 
                    og vinteren og da gjerne med maggot som agn. 
                    Det ryktes at berget bak bensinstasjonen i den nordlige delen 
                    av vannet er en god plass å fiske røye.
                    
                    Siden det går en turvei rundt hele vannet er Liavatnet et lett 
                    tilgjengelig fiskevann sentralt i Åsane. 
                    Bergen kommune er grunneier langs østsiden av vannet.
                  </Text>
                </View>
              </View>
            </CollapsedView>
            
            <CollapsedView title="Storelva Arnavassdraget">
            <View style = {styles.container}>
                <View style = {styles.textContainer}>
                  <Text>
                    <Text style = {styles.boldText}>
                        Laks og sjørret i Storelva i Arnavassdraget
                    </Text>
                    {"\n\n"}
                    Arna Sportsfiskarlag administrerer 
                    fisket etter laks og sjøørret i Storelva. 
                    Laget kultiverer fiskebestanden i vassdraget 
                    ved å sette ut yngel og legge ut øyerogn fra eget klekkeri. 
                    Laget driver også med tilrettelegging langs 
                    vassdraget i form av fiskebuer, broer og rydding av boss.
                    {"\n\n"}
                    I perioden 2011-2013 har fangsten av laks i 
                    Storelva vært svært gode. 
                    Toppåret var i 2012 med en totalfangst på ca. 2,4 tonn. 
                    Rekordlaksen ble fanget i 2012 og veide hele 15 kg.
                    {"\n\n"}
                    Fisketiden i Storelva strekker seg normalt 
                    fra 1. juli til 15. september. 
                    For mer informasjon om fiske i Storelva 
                    se 
                  </Text>
                  <Text style = {styles.URL}>www.arnasportsfiskarlag.com</Text>
                </View>
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

    URL: {
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
      },
    
  });