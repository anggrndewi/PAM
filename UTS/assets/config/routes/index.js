import { Component } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const materialbtn = createMaterialBottomTabNavigator();

class Index extends Component {
    render() {
        return(
            <View>
                <Text>HAIIII</Text>
            </View>
        )
    }
}

export default Index;