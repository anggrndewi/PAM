import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropPromo from "./propitempromo";

const Itempromo = () => {
    return (
        <View style={styles.item}>
            <PropPromo image={require('../images/food.jpg')} text="Makanan Enak banget"/>
            <PropPromo image={require('../images/food.jpg')} text="Makanan Enak banget"/>
            <PropPromo image={require('../images/food.jpg')} text="Makanan Enak banget"/>
            <PropPromo image={require('../images/food.jpg')} text="Makanan Enak banget"/>
            <PropPromo image={require('../images/food.jpg')} text="Makanan Enak banget"/>
        </View>
    )
}

const styles= StyleSheet.create ({
    item: {
        flexDirection:'row',
        justifyContent: "space-between",
        marginTop:15,
        flexWrap: "wrap",
        width:'100%',
    },
})

export default Itempromo;