/**
 * Created by yk on 2016/8/29.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Dimensions,
} from 'react-native';

import LeagueScrollView from './VideoList'
import FirstNoBarNavigator from '../common/FirstNoBarNavigator'

export default class VideoListNavigator extends Component {

    render() {
        return (
            <FirstNoBarNavigator
                initialRoute={{component:VideoList}}
                renderScene={(route, navigator) =>{
                     let Component = route.component;
                     return <Component {...route} navigator={navigator}/>
                }}
                barStyle={styles.naviBar}
            />
        )
    }
}

const styles = StyleSheet.create({
    naviBar: {
        backgroundColor: '#f0f0f0',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
})