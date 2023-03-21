import react, { Component } from "react";
import { Text, View, Image, StyleSheet, Dimensions, StatusBar } from "react-native";
import frame from './assets/images/awan.jpg';
import info from "./assets/Informasi/info";

class Header extends Component {
  render(){
    return(
      <View>
        <StatusBar barStyle='dark-content' translucent backgroundColor="rgba(0, 0, 0, 0)" />
        <Image style={styles.frame} source={frame} />
        <Text style={styles.title}>{info.judul}</Text>
      </View>
    );
  }
}

const {height, width} = Dimensions.get('window')
const styles = StyleSheet.create({
  frame : { 
    height:138,
    width: width,
  },

  title: {
    marginBottom:0,
    fontSize:18,
    fontWeight:'bold',
    position:'absolute',
    alignSelf: "center",
    top:50,
    color:"#383838",
  }

})
export default Header;