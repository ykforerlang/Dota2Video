/**
 * Created by pwrd on 16/7/20.
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
} from 'react-native';

import commonStyles from '../common/commonStyle'
import commonComponent from '../common/commonComponent'

import LeagueBrief from './LeagueBrief'
import MatchBrief from './MatchBrief'

import FetchNetData from '../common/FetchNetData'

export default class LeagueInfo extends React.Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: ((r1, r2) => r1 !== r2),
            sectionHeaderHasChanged: ((s1, s2) => s1 !== s2),
        })
        this.state = {dataSource: ds.cloneWithRowsAndSections({"__s1":["__init"]})}
        this._rc = <RefreshControl
            refreshing = {false}/>
        this._originalMatch = {}

        this._lastCallParam = null
    }

    componentDidMount() {
        FetchNetData.getMatchList(null, null, this.props.league.leagueid, (err, res) => {
            if (err) {
                //TODO 处理错误
            } else {
                this._handlerMatchList(res)
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRowsAndSections(this._originalMatch)
                })
            }
        })
    }

    render() {
        return (
            <ListView
                initialListSize={10}
                dataSource={this.state.dataSource}
                renderRow={(sub) => this._renderRow(sub)}
                renderSectionHeader={(sectionData, sectionID) => this._renderHeader(sectionData, sectionID)}
                showsVerticalScrollIndicator={true}
                removeClippedSubviews={true}
                renderHeader ={this._header.bind(this)}
                refreshControl = {this._rc}
                onEndReached={this._endReached.bind(this)}
                onEndReachedThreshold={300}
                scrollRenderAheadDistance={600}
            />
        )
    }

    _header() {
        return (
            <View style={commonStyles.ofHidden}>
                <LeagueBrief league={this.props.league} withName={false} desStyle={styles.leagueDesStyle}/>
                <Text style={styles.title}>系列赛</Text>
            </View>
        )
    }

    _renderRow(rowData) {
        if (rowData == "__init") return commonComponent.loadData(styles.loadData, 'small')

        return <MatchBrief matchInfo={rowData} navigator={this.props.navigator}/>
    }

    _renderHeader(sectionData, sectionID) {
        if (sectionID == "__s1") return null
        return <Text style={styles.sectionTitle}>{sectionID}</Text>
    }

    _endReached() {
        const oriKeys = Object.keys(this._originalMatch)
        const lastOri = this._originalMatch[oriKeys[oriKeys.length - 1]]
        const lastId = lastOri[lastOri.length - 1].matchId

        if (this._lastCallParam == lastId) {
            return
        } else {
            this._lastCallParam = lastId
        }

        FetchNetData.getMatchList(lastId, null, this.props.league.leagueid, (err, res) => {
            if (err) {
                //TODO 处理错误
            } else {
                this._handlerMatchList(res)
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRowsAndSections(this._originalMatch)
                })
            }
        })
    }

    _handlerMatchList(res) {
        for (let i = 0; i < res.length; i++) {
            const ele = res[i]

            const matchArray = this._originalMatch[ele.startDay]
            if (matchArray) {
                this._originalMatch[ele.startDay].push(ele)
            } else {
                this._originalMatch[ele.startDay] = [ele]
            }
        }
    }
}

const styles = StyleSheet.create({
    leagueDesStyle:{
        color:'black',
    },


    title:{
        fontSize:15,
        fontWeight:'600',
        textAlign:'center',
        backgroundColor: '#d0d0d0',
        marginTop:2,
        padding:10,
        marginBottom:2,
        fontStyle:'italic',
    },

    sectionTitle:{
        overflow:'hidden',
        fontSize:15,
        fontWeight:'600',
        padding:10,
        backgroundColor:'#e0e0e0',
    },

    loadData: {
        marginTop:30,
    }

})