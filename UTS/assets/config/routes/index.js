import { Component } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Homes from "../../page/Home";
const materialbtn = createMaterialBottomTabNavigator();

class Index extends Component {
    render() {
        return(
            <NavigationContainer>
                <materialbtn.Navigator>
                    <materialbtn.Screen name="Home" component={Homes}/>
                </materialbtn.Navigator>
            </NavigationContainer>
        )
    }
}

export default Index;