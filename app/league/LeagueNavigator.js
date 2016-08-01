/**
 * Created by pwrd on 16/7/20.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Dimensions,
} from 'react-native';

import LeagueScrollView from './LeagueScrollView'
import FirstNoBarNavigator from '../common/FirstNoBarNavigator'

export default class LeagueNavigator extends Component {

    render() {
        return (
            <FirstNoBarNavigator
                initialRoute={{component:LeagueScrollView}}
                renderScene={(route, navigator) =>{
                     let Component = route.component;
                     return <Component {...route} navigator={navigator}  />
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