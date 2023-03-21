import react from "react";
import { image, Text, View, StyleSheet} from "react-native";
import PropFitur from "./PropFitur";

const Fitur = () => {
    return (
        <View style={styles.wrapperFitur}>
        <PropFitur image={require('../images/food.jpg')} title="food"/>
        <PropFitur image={require('../images/car.jpg')} title="Car"/>
        <PropFitur image={require('../images/bike.jpg')} title="Bike"/>
        <PropFitur image={require('../images/send.jpg')} title="Delivery"/>
        <PropFitur image={require('../images/subscribe.jpg')} title="Subscription"/>
        <PropFitur image={require('../images/doctor.jpg')} title="Dokter"/>
        <PropFitur image={require('../images/pulsa.jpg')} title="Pulsa"/>
        <PropFitur image={require('../images/more.jpg')} title="More"/>
      </View>
    )
}

const styles = StyleSheet.create({ 
    wrapperFitur: {
      flexDirection:'row',
      justifyContent: "space-between",
      marginTop:15,
      flexWrap: "wrap",
      width:'100%',
    },
})

export default Fitur;