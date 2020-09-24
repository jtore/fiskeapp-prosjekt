import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation-stack";
import Home from "../screens/home";
import About from "../screens/about";

const screens = {
    Home: {
        screen: Home

    },

    About: {
        screen: About
    }
}

const HomeStack = createStackNavigator({screens});

export default createAppContainer(HomeStack)