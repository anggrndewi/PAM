import react, { Component } from "react";
import { Text, View, Image, StyleSheet, Dimensions, StatusBar } from "react-native";
import frame from './assets/images/awan.jpg';
import info from "./assets/Informasi/info";

class Home extends Component {
  render(){
    return(
      <View>
        <StatusBar barStyle='dark-content' translucent backgroundColor="rgba(0, 0, 0, 0)" />
        <Image style={styles.frame} source={frame} />
        <Text style={styles.greeting}>{info.judul}</Text>

        <View style={styles.wrapper}>
          <View style={styles.textwrapper}>
            <Text>{info.judul}</Text>
            <Text>{info.judul}</Text>
          </View>

          <View style={styles.line}></View>
        </View>
      </View>
    );
  }
}

const {height, width} = Dimensions.get('window')
const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal:18,
    height: 150,
    marginTop: -60,
    backgroundColor: "white",
    elevation:4,
    borderRadius:10,
  },

  textwrapper: {
    flexDirection:'row',
    justifyContent:"space-between",
    marginHorizontal:12,
    marginTop:10,
    fontSize:16,
    fontWeight:"bold",
    color:"#383838",
  },

  line: {
    height:0.8,
    backgroundColor:"#adadad",
    marginTop:10,
    marginHorizontal:10,
  },

  frame : { 
    height:138,
    width: width,
  },

  greeting: {
    fontSize:17,
    fontWeight:'bold',
    position:'absolute',
    alignSelf: "center",
    top:50,
    color:"#383838",
  }

})
export default Home;