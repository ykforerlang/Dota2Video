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

import LeagueBrief from './LeagueBrief'
import LeagueInfo from './LeagueInfo'

import fetchNetData from '../common/fetchNetData'
import commonComponent from '../common/commonComponent'

export default class LeagueList extends Component {
    constructor(props) {
        super(props)
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})
        this.state = {leagueList: this.ds.cloneWithRows([])}
    }

    componentDidMount() {
        this.setState({
            leagueList: this.state.leagueList.cloneWithRows(fetchNetData.getLeagueList(this.props.type))
        })
    }

    render() {
        if (this.state.leagueList.getRowCount() == 0) {
            return commonComponent.loadData()
        }

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
                        <LeagueBrief league={league} withName={true} style={styles.leagueBack}/>
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
        overflow: 'hidden', //  配合   removeClippedSubviews
    },
    content: {
        overflow: 'hidden',
    },
    leagueBack: {
        backgroundColor: '#e0e0e0',
    },

})