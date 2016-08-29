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

import {apiUrl} from '../common/constant'

const {height, width} = Dimensions.get('window');
export default class Video extends Component {
    constructor(props) {
        super(props)
        this.videoId = props.videoId
    }

    render() {
        return (
            <WebView
                style={styles.content}
                javaScriptEnabled={true}
                scalesPageToFit={true}
                source={{
                        uri: `${apiUrl}video.html?videoId=${this.videoId}&width=${width}&height=${height}`,
                  }}
                automaticallyAdjustContentInsets={false}
                domStorageEnabled={true}
                decelerationRate="normal"
                startInLoadingState={true}
            >
            </WebView>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        padding:10,
        flex:1,
    },
})