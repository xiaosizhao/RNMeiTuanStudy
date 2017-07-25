/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry,} from 'react-native';
import {StackNavigator} from 'react-navigation'
import HomeScene from './src/scene/Home/HomeScene';

export default class PO extends Component {
  render() {
    return (
      <HomeScene/>
    );
  }
}


const Simple = StackNavigator(
    {
        Home: {screen: HomeScene},
    }
);


AppRegistry.registerComponent('PO', () => Simple);
