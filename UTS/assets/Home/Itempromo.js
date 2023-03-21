import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropPromo from "./propitempromo";

const Itempromo = () => {
    return (
        <View style={styles.item}>
            <PropPromo image={require('../images/bali.jpg')} text="Pulau Dewata" tanggal="22-04-2023"/>
            <PropPromo image={require('../images/Ciwidey.jpg')} text="Tempat Wisata Ciwidey" tanggal="22-04-2023"/>
            <PropPromo image={require('../images/rajaampat.jpeg')} text="Raja Ampat" tanggal="25-03-2023"/>
            <PropPromo image={require('../images/Tugu-Monas-Jakarta.jpg')} text="Tugu Monas Jakarta" tanggal="20-04-2023"/>
            <PropPromo image={require('../images/TMII.jpg')} text="Taman Mini Indonesia Indah" tanggal="27-03-2023"/>
        </View>
    )
}

const styles= StyleSheet.create ({
    item: {
        flexDirection:'row',
        justifyContent: "space-between",
        marginTop:15,
        marginLeft:6,
        flexWrap: "wrap",
        width:'100%',
    },
})

export default Itempromo;