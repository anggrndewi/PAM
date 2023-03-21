import { Component } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Homes from "./assets/page/Home";

const materialbtn = createMaterialBottomTabNavigator();

export default class Navigator extends Component {
    render() {
        return(
            <NavigationContainer>
                <materialbtn.Navigator>
                    <materialbtn.Screen name="Home" component={Home} />
                </materialbtn.Navigator>
            </NavigationContainer>
        )
    }
}