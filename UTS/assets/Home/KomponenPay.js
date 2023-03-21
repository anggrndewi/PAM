import react from "react";
import { Image, Text, View, StyleSheet} from "react-native";
import frame from '../images/awan.jpg';

const KomponenPay = () => {
    return (
        <View style={styles.wrapperpay}>
        <View>
          <Image style={styles.imagepay} source={frame} />
          <Text style={{alignSelf:'center'}}>Pay</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({ 
    wrapperpay: {
      flexDirection:'row',
    },
  
    imagepay: {
      height:45,
      width:45,
      marginTop:10,
      marginHorizontal:18,
    },
})

export default KomponenPay;