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

import FetchNetData from '../common/FetchNetData'
import commonComponent from '../common/commonComponent'

export default class LeagueList extends Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.leagueid !== r2.leagueid})
        this.state = {leagueList: ds.cloneWithRows([])}

        this._originalArray = []
    }

    componentDidMount() {
        Orientation.lockToPortrait()

        FetchNetData.getLeagueList(null, null, this.props.type, (err, res) => {
            if (err) {
               //TODO 显示加载失败
            } else {
                this._originalArray = this._originalArray.concat(res)
                this.setState({
                    leagueList: this.state.leagueList.cloneWithRows(this._originalArray)
                })
            }
        })
    }

    render() {
        if (this.state.leagueList.getRowCount() == 0) {
            return commonComponent.loadData()
        }

        return (
            <ListView
                initialListSize={10}
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
                onEndReached={this._endReached.bind(this)}
                onEndReachedThreshold={300}
                scrollRenderAheadDistance={500}
            />
        )
    }

    _renderLeagueDetail(league) {
        this.props.navigator.push({league: league, component: LeagueInfo, naviTitle: league.name, naviBack: '赛事'})
    }

    _endReached() {
        const last  = this._originalArray[this._originalArray.length - 1]
        FetchNetData.getLeagueList(last.itemdef, null, this.props.type, (err, res)=> {
            if (err) return
            this._originalArray = this._originalArray.concat(res)
            this.setState({
                leagueList: this.state.leagueList.cloneWithRows(this._originalArray)
            })
        })
    }

    _addHeaderLeagues() {
        //TODO 下拉加载
    }
}

const styles = StyleSheet.create({
    lineRoot: {
        marginTop: 5,
        overflow: 'hidden', //  配合   removeClippedSubviews
    },
    leagueBack: {
        backgroundColor: '#e0e0e0',
    },

})