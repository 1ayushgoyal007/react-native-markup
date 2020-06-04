import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import Screen from "./src/screens/Screen";
import ImageScreen from "./src/screens/ImageScreen";
import Counter from "./src/screens/Counter";
import ColorScreen from './src/screens/ColorScreen';
import Input from "./src/screens/Input";

import SquareScreen from './src/screens/SquareScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Screen: Screen,
    ImageScreen: ImageScreen,
    Counter: Counter,
    ColorScreen:ColorScreen,
    SquareScreen:SquareScreen,
    Input:Input
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
