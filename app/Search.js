/**
 * Created by pwrd on 16/6/12.
 */

import React, {Component} from 'react';

import {
    Animated,
    Easing,
    View,
    StyleSheet,
    ScrollView,
    ListView,
    Dimensions,
    TouchableHighlight,
    Image,
    Text,
} from 'react-native';

import Series from './league/Series'

export default class Search extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <Series/>
        )
    }



};


