/**
 * Created by yk on 2016/9/7.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Dimensions,
} from 'react-native';

import TarBar from './TarBar'
import FirstNoBarNavigator from './common/FirstNoBarNavigator'

import { Provider } from 'react-redux';
import configureStore from './configureStore'
const store = configureStore({
    leagueList:{
    }
})

export default class IndexNavigator extends Component {

    render() {
        return (
            <Provider store={store}>
                <FirstNoBarNavigator
                    initialRoute={{component:TarBar}}
                    renderScene={(route, navigator) =>{
                     let Component = route.component;
                     return <Component {...route} navigator={navigator}  />
                }}
                    barStyle={styles.naviBar}
                />
            </Provider>
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