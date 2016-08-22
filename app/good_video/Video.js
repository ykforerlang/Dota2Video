/**
 * Created by yk on 2016/8/22.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    WebView,
} from 'react-native';

import Orientation from 'react-native-orientation'

import commonComponent from '../common/commonComponent'
import FetchNetData from '../common/FetchNetData'

export default class Video extends  Component {
    constructor(props) {
        super(props)

        this.matchId = props.matchId
        this.state = {
            videoHtml: null
        }
    }

    componentDidMount() {
        Orientation.lockToLandscape() // 横屏

        FetchNetData.getMatchVideo(this.matchId, (err, res) => {
            this.setState({
                videoHtml:`<html><body>${res}</body></html>`
            })
        })
    }


    render() {
        if (!this.state.videoHtml) {
            return commonComponent.loadData()
        }

        return (
            <WebView source={{html:this.state.videoHtml}}/>
        )
    }
}