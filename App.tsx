/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, { Component } from 'react';
import { Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  StyleSheet
} from 'react-native';
import Home from './src/screens/Home';
import AddToDo from './src/screens/AddToDo';
import ListToDo from './src/screens/ListToDo';

declare var global: {HermesInternal: null | {}};
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({ header: <Text>To Dos List</Text> }) 
    }, 
    AddToDo,
    ListToDo
  }, 
  {
      initialRouteName: 'Home'
  }
);

const styles = StyleSheet.create({

});
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    render() {
       return <AppContainer />
    }
}
