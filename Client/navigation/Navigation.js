
import { createDrawerNavigator, createMaterialTopTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import Login from '../Screens/Login';

import MapView from '../components/map/map';

const StackNavigator = createStackNavigator({
    Login: {
        screen: Login
    },
    MapView: {
        screen: MapView
    },
    // Dashboard: {
    //     screen: Screens.DashboardScreen
    // },
})
  
// const TabNavigator = createMaterialTopTabNavigator({
//     Home: {
//         screen: StackNavigator
//     },
//     Profile: {
//         screen: Screens.ProfileScreen
//     }
// })

// const DrawerNavigator = createDrawerNavigator({
//     Home: {
//         screen: TabNavigator
//     },
//     Profile: {
//         screen: Screens.ProfileScreen
//     }
// })

const Navigator = createAppContainer(StackNavigator)

export default Navigator