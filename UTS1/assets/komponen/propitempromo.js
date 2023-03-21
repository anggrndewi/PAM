import { useLinkProps } from "@react-navigation/native";
import { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons.js';

const{width}= Dimensions.get('screen')
const PropPromo = (props) => {
    return (
        <View style={styles.item}>
            <Image source={props.image} styles={props.promoimage}/>
            <View style={styles.textpromo}>
                <Text>{props.text}</Text>
            </View>
            <View style={{marginLeft:10, marginBottom:8, flexDirection:"row"}}>
                <Ionicons name='calendar' size={20} color="#575757" />
                <Text style={{marginLeft:8, marginTop:4}}>{props.tanggal}</Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create ({
    item: {
      backgroundColor:'white',
      elevation:4, 
      borderRadius:8, 
      width:width /2-27,
      marginRight:18,
      marginBottom: 18,
    },

    promoimage: {
        height:width/2-27,
        width:width /2,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },

    textpromo : {
        marginVertical: 10,
        marginLeft:10,
    }
})

export default PropPromo;