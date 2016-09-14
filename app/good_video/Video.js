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
    InteractionManager,
} from 'react-native';

import {apiUrl} from '../common/constant'
import commonComponent from '../common/commonComponent'

const {height, width} = Dimensions.get('window');
export default class Video extends Component {
    constructor(props) {
        super(props)
        this.videoId = props.videoId

        this.state = {
            renderHoldPlace: true
        }
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({
                renderHoldPlace: false
            })
        })
    }

    render() {
        if (this.state.renderHoldPlace) {
            return commonComponent.loadData()
        }


        const webHeight = height - 64 - 40 // header and footer
        const webWidth = width //padding left and right

        return (
            <WebView
                style={styles.content}
                javaScriptEnabled={true}
                source={{
                        uri: `${apiUrl}video/ykPage?videoId=${this.videoId}&width=${webWidth}&height=${webHeight}`,
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
        flex:1,
    },
})