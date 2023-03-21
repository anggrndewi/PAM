import { useLinkProps } from "@react-navigation/native";
import { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

const{width}= Dimensions.get('window')
const PropPromo = (props) => {
    return (
        <View style={styles.item}>
            <Image source={props.image} styles={props.promoimage}/>
            <View style={styles.textpromo}>
                <Text>{props.text}</Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create ({
    item: {
      backgroundColor:'white',
      elevation:4, 
      borderRadius:8, 
      width:width,
      marginRight:18,
      marginBottom: 18,
    },

    promoimage: {
        height:width/2-27,
        width:width /2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    textpromo : {
        marginVertical: 10,
        marginLeft:10,
    }
})

export default PropPromo;