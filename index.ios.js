/**
 * Sample React Native App
 * we are dotaother not max
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import IndexView from './app/IndexView.ios.js'

class Dota2Video extends Component {
  render() {
    return (
      <IndexView/>
    );
  }
}
AppRegistry.registerComponent('Dota2Video', () => Dota2Video);
