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
import LeagueTypeBar from './LeagueTypeBar'
import WtTarBar from '../common/WtTarBar'

import leagueListData from '../base_data/leagueBriefs.json'

const LeagueType = [{
    tabLabel: "高端组",
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

    componentDidMount() {
       //Orientation.lockToPortrait()
    }


    render() {
        return (
            <ScrollableTabView
                style={styles.tabView}
                tabBarInactiveTextColor="gray"
                tabBarActiveTextColor="black"
                renderTabBar={() => <WtTarBar underlineColor="blue" underlineHeight={4}/>}
            >

                {LeagueType.map((value, index) =>
                    <LeagueList initLeagueList={leagueListData[value.leagueType]}
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
