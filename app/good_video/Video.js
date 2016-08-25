/**
 * Created by yk on 2016/8/22.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    WebView,
    Dimensions,
} from 'react-native';

import Orientation from 'react-native-orientation'

import commonComponent from '../common/commonComponent'
import FetchNetData from '../common/FetchNetData'

const {height, width} = Dimensions.get('window');
export default class Video extends  Component {
    constructor(props) {
        super(props)

        this.matchId = props.matchId
        this.htmlRes = `<html><body>${props.videoRes}</body></html>`
    }

    render() {

        return (
            <View style={styles.content}>
                <WebView source={{html:this.htmlRes}}
                         scalesPageToFit={true}
                         style={styles.htmlContent}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        paddingBottom:40,
        paddingRight:5,
        paddingLeft:5,
        width: width - 10,
        height: (width - 10) * 4 / 3,
    },
    htmlContent: {
        width:300,
        height:200,
    }

})