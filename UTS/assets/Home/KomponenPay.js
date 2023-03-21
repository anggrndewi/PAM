import react from "react";
import { Image, Text, View, StyleSheet} from "react-native";
import KomponenPayProp from "./KomponenPayProp";

const KomponenPay = () => {
    return (
        <View style={styles.wrapperpay}>
        <KomponenPayProp image={require('../images/pay.jpg')} title="Pay" />
        <KomponenPayProp image={require('../images/topup.jpg')} title="Topup" />
        <KomponenPayProp image={require('../images/reward.jpg')} title="Reward" />
      </View>
    )
}

const styles = StyleSheet.create({ 
    wrapperpay: {
      flexDirection:'row',
      justifyContent: "space-between",
      flexWrap: "wrap",
      width:'100%',
    },
})

export default KomponenPay;