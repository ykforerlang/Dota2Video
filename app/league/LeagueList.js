/**
 * Created by pwrd on 16/7/19.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    ListView,
    RefreshControl,
    Image,
    Dimensions,
    Navigator,
} from 'react-native';

import Orientation from 'react-native-orientation'

import League from './League'
import LeagueInfo from './LeagueInfo'

export default class LeagueList extends Component {
    constructor(props) {
        super(props)
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})
        this.state = {leagueList: this.ds.cloneWithRows(props.initLeagueList)}
    }

    componentDidMount() {
       // Orientation.lockToPortrait()
    }

    render() {
        return (
            <ListView
                initialListSize={10}
                contentContainerStyle={styles.content}
                dataSource={this.state.leagueList}
                renderRow={(league) => (
                    <TouchableHighlight underlayColor="#888888"
                                onPress={() => this._renderLeagueDetail(league)}
                                style={styles.lineRoot}
                    >
                        <League league={league} withName={true}/>
                    </TouchableHighlight>
                    )}
                showsVerticalScrollIndicator={true}
                removeClippedSubviews={true}
            />
        )
    }

    _renderLeagueDetail(league) {
        this.props.navigator.push({league: league, component: LeagueInfo, naviTitle: league.name, naviBack: '锦标赛'})
    }
}

const styles = StyleSheet.create({
    lineRoot: {
        marginTop: 5,
        overflow:'hidden', //  配合   removeClippedSubviews
    },
    content:{
        overflow:'hidden',
    }
})