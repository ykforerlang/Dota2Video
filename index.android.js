/**
 * we are dotavideo not max
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';

import IndexNavigator from './app/IndexNavigator'

class Dota2Video extends Component {
  render() {
    return (
        <IndexNavigator/>
    );
  }
}
AppRegistry.registerComponent('Dota2Video', () => Dota2Video);
