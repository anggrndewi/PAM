import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropPromo from "./propitempromo";

const Itempromo = () => {
    return (
        <View style={styles.item}>
            <PropPromo image={require('../images/food.jpg')} text="Makanan Enak banget" tanggal="22-04-2023"/>
            <PropPromo image={require('../images/food.jpg')} text="Makanan Enak banget" tanggal="22-04-2023"/>
            <PropPromo image={require('../images/food.jpg')} text="Makanan Enak banget" tanggal="25-03-2023"/>
            <PropPromo image={require('../images/food.jpg')} text="Makanan Enak banget" tanggal="20-04-2023"/>
            <PropPromo image={require('../images/food.jpg')} text="Makanan Enak banget" tanggal="27-03-2023"/>
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