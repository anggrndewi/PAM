import react, { Component } from "react";
import { Text, View, Image, StyleSheet, Dimensions, StatusBar, ScrollView } from "react-native";
import frame from '../../images/awan.jpg';
import info from "../../Informasi/info";
import Itempromo from '../../Home/Itempromo';
import Footer from "../../Footer/footer";

class Homes extends Component {
  render(){
    return(
      
      <ScrollView>
        <StatusBar barStyle='dark-content' translucent backgroundColor="rgba(0, 0, 0, 0)" />
        <Image style={styles.frame} source={frame} />
        <Text style={styles.greeting}>{info.judul}</Text>

        <View style={styles.wrapper}>
          <View style={styles.textwrapper}>
            <Text style={{justifyContent:'center', fontSize:17}}>{info.desk}</Text>
          </View>
        </View>

        <View style={styles.pemisah}></View>
        <Itempromo />
        <Footer />
      </ScrollView>
    );
  }
}

const {height, width} = Dimensions.get('window')
const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal:18,
    height: 120,
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
  },

  pemisah:{
    width: width,
    height:15,
    backgroundColor:'#ededed',
    marginVertical:15,
  },

})
export default Homes;