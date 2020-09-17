import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Animated, TouchableWithoutFeedback } from 'react-native';
import MainService from "./app/loadingscreen";
export default class App extends React.Component {
  state = {
    loaded: false
  }
  constructor(){
    super();
    MainService.load(v => this.setState({loaded: true}));

  }
const
  render() {
    return (
      <View style={styles.container}>
        {this.state.loaded ?
          <View>
          <Text>FISK!</Text>
          <View>
          <Text>FISK!</Text>
          </View>
          </View>
          : <Image source={require('./assets/mainl.svg')} style={{ resizeMode: 'cover', width: '100%', height: '100%' }} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#fff",
  alignItems:"center",
  justifyContent: "center",
},

});
