import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropPromo from "./propitempromo";

const Itempromo = () => {
    return (
        <View style={styles.item}>
            <PropPromo image={require('../images/food.jpg')} text="Makanan Enak banget"/>
        </View>
    )
}

const styles= StyleSheet.create ({
    item: {
      marginHorizontal:18,
      width:'100%', 
      flexWrap:"wrap", 
      flexDirection: "row",
    },
})

export default Itempromo;