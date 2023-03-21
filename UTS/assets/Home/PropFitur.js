import { Component } from "react";
import { Image, Text, View, StyleSheet} from "react-native";

class PropFitur extends Component {
    render(){
        return (
            <View style={{width:"25%", alignItems:'center'}}>
            <Image style={styles.imagefitur} source={this.props.image} />
            <Text style={{alignSelf:'center'}}>{this.props.title}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({ 
    imagefitur: {
      height:45,
      width:45,
      marginTop:15,
      marginHorizontal:15,
    },
})

export default PropFitur;