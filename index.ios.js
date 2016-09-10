/**
 * we are dotavideo not max
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import IndexTarBar from './app/IndexTarBar'

class Dota2Video extends Component {
  render() {
    return (
      <IndexTarBar/>
    );
  }
}
AppRegistry.registerComponent('Dota2Video', () => Dota2Video);
