import { Component } from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {Homes, Aktivitas} from "../../page";
import Inbox from "../../page/Inbox";


const materialbtn = createMaterialBottomTabNavigator();

class Index extends Component {
    render() {
        return(
            <NavigationContainer>
                <materialbtn.Navigator
                shifting={false}
                initialRouteName="Home"
                activeColor="#09ab54"
                inactiveColor="#676767"
                barStyle={{backgroundColor: 'white'}}
                >
                    <materialbtn.Screen name="Home" component={Homes} options={{tabBarLabel: 'Home', tabBarIcon :({color}) => (
                        <View style={{marginTop:-3}}>
                            <Image source={require('../../images/nav-home.jpg')} style={{height:30, width:30}} />
                        </View>
                    ) }}/>
                    <materialbtn.Screen name="Aktivitas" component={Aktivitas} options={{tabBarLabel: 'Akivitas', tabBarIcon :({color}) => (
                        <View style={{marginTop:-3}}>
                            <Image source={require('../../images/nav-activity.jpg')} style={{height:30, width:30}} />
                        </View>
                    ) }}/>
                    <materialbtn.Screen name="Inbox" component={Inbox} options={{tabBarLabel: 'Inbox', tabBarIcon :({color}) => (
                        <View style={{marginTop:-3}}>
                            <Image source={require('../../images/nav-inbox.jpg')} style={{height:30, width:30}} />
                        </View>
                    ) }}/>
                </materialbtn.Navigator>
            </NavigationContainer>
        )
    }
}

export default Index;