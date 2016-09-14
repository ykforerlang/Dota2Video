/**
 * Created by pwrd on 16/6/25.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableHighlight,
    ActivityIndicator,
    Dimensions,
} from 'react-native';

import StaticContainer from 'react-static-container'

export default class CommonComponent {

    static loadData(style, size) {
        return (<StaticContainer><ActivityIndicator
            animating={true}
            style={[styles.loadData, style]}
            size={size || 'large'}
        /></StaticContainer>)
    }

}

const styles = StyleSheet.create({
    loadData: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

})