import { Component } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {Homes, Aktivitas} from "../../page";
import Inbox from "../../page/Inbox";


const materialbtn = createMaterialBottomTabNavigator();

class Index extends Component {
    render() {
        return(
            <NavigationContainer>
                <materialbtn.Navigator>
                    <materialbtn.Screen name="Home" component={Homes}/>
                    <materialbtn.Screen name="Aktivitas" component={Aktivitas}/>
                    <materialbtn.Screen name="Inbox" component={Inbox}/>
                </materialbtn.Navigator>
            </NavigationContainer>
        )
    }
}

export default Index;