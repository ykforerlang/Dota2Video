/**
 * Created by pwrd on 16/6/12.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Dimensions,
    Navigator,
} from 'react-native';

import Orientation from 'react-native-orientation'
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

import LeagueList from './LeagueList';
import WtTarBar from '../common/WtTarBar'


const LeagueType = [{
    tabLabel: "高端/Majoy组",
    leagueType: "premium",
}, {
    tabLabel: "职业组",
    leagueType: "professional",
}, {
    tabLabel: "业余组",
    leagueType: "amateur"
}];


export  default class LeagueScrollView extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <ScrollableTabView
                style={styles.tabView}
                tabBarInactiveTextColor="gray"
                tabBarActiveTextColor="black"
                renderTabBar={() => <WtTarBar underlineColor="grey" underlineHeight={3}/>}
            >

                {LeagueType.map((value, index) =>
                    <LeagueList type={value.leagueType}
                                navigator={this.props.navigator}
                                tabLabel={value.tabLabel}
                                key={index}/>
                )
                }
            </ScrollableTabView>
        )
    }
}

const styles = StyleSheet.create({
    tabView: {
        marginTop: 20,
    },

})

