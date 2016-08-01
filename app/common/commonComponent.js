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
    ActivityIndicatorIOS,
    Dimensions,
} from 'react-native';

export default class CommonComponent {

    static loadData(style, size) {
        if (Platform.OS === 'ios'){
            return (<ActivityIndicatorIOS
                animating={true}
                style={[styles.loadData, style]}
                size= {size || 'large'}
            />)
        } else {
            //TODO
        }
    }

    static LoadData
}

const styles = StyleSheet.create({
    loadData: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
    },

})