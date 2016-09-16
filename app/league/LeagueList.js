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
    InteractionManager,
} from 'react-native';

import Orientation from 'react-native-orientation'

import LeagueBrief from './LeagueBrief'
import LeagueInfo from './LeagueInfo'

import commonComponent from '../common/commonComponent'
import Util from '../common/util'
import * as leagueListAction from '../actions/leagueList'

class LeagueList extends Component {
    constructor(props) {
        super(props)
        this._ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.leagueid !== r2.leagueid})
    }

    componentDidMount() {
        Orientation.lockToPortrait()
        const {actions, type, init} = this.props

        if (!init) {
            actions.initReq(type)
        }
    }


    render() {
        const {init, pullRefreshing, items} = this.props

        if (!init) {
            return commonComponent.loadData()
        }

        return (
            <ListView
                contentContainerStyle={styles.content}
                initialListSize={10}
                dataSource={this._ds.cloneWithRows(items)}
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
                onEndReached={this._endReached.bind(this)}
                onEndReachedThreshold={300}
                refreshControl={
                    <RefreshControl
                        refreshing={pullRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                    />
                }
            />
        )
    }

    _renderLeagueDetail(league) {
        this.props.navigator.push({
            league: league,
            component: LeagueInfo,
            naviTitle: league.name,
            naviBack: '赛事'
        })
    }

    _endReached() {
        const {actions, type} = this.props
        actions.fetchScrollDownReq(type)
    }

    _onRefresh() {
        const {actions, type} = this.props
        actions.fetchPullReq(type)
    }
}

const styles = StyleSheet.create({
    content: {
        paddingBottom: 40,
    },
    lineRoot: {
        marginTop: 5,
        overflow: 'hidden', //  配合   removeClippedSubviews
    },
    leagueBack: {
        backgroundColor: '#e0e0e0',
    },

})


export default Util.ReduxComponent((state, ownProps) => {
    const typeLeagues = state.leagueList[ownProps.type]
    if (!typeLeagues) {
        return {
            init: false,
            pullRefreshing: false,
            items: null,
        }
    } else {
        return {
            init: true,
            pullRefreshing: typeLeagues.pullRefreshing,
            items: typeLeagues.items
        }
    }

}, leagueListAction, LeagueList)