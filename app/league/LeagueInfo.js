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
import Util from '../common/util'

import LeagueBrief from './LeagueBrief'
import MatchBrief from './MatchBrief'

import * as matchListActin from '../actions/matchList'

class LeagueInfo extends React.Component {
    constructor(props) {
        super(props)
        this._ds = new ListView.DataSource({rowHasChanged: ((r1, r2) => r1 !== r2),
            sectionHeaderHasChanged: ((s1, s2) => s1 !== s2),
        })
    }

    componentDidMount() {
        const {actions, league, init} = this.props
        if (!init) {
            actions.initReq(league.leagueid)
        }
    }

    render() {
        const {init, pullRefreshing, items} = this.props
        const dsItems = init ? items : {"__s1":["__init"]}

        return (
            <ListView
                initialListSize={10}
                dataSource={this._ds.cloneWithRowsAndSections(dsItems)}
                renderRow={(sub) => this._renderRow(sub)}
                renderSectionHeader={(sectionData, sectionID) => this._renderHeader(sectionData, sectionID)}
                showsVerticalScrollIndicator={true}
                removeClippedSubviews={true}
                renderHeader ={this._header.bind(this)}
                onEndReached={this._endReached.bind(this)}
                onEndReachedThreshold={300}
                scrollRenderAheadDistance={600}
                refreshControl = {
                    <RefreshControl
                        refreshing={pullRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                    />
                }
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

    _onRefresh() {
        const {actions, league, init} = this.props
        if(!init) return
        actions.fetchPullReq(league.leagueid)
    }
    _endReached(){
        const {actions, league, init} = this.props
        if(!init) return
        actions.fetchScrollDownReq(league.leagueid)
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
        fontStyle:'italic',
    },

    sectionTitle:{
        overflow:'hidden',
        fontSize:15,
        fontWeight:'600',
        padding:10,
        backgroundColor:'#e0e0e0',
        marginTop:5,
    },

    loadData: {
        marginTop:30,
    }

})

export default Util.ReduxComponent((state, ownProps) => {
    console.log('ownProps', ownProps)
    const leagueMatchList = state.matchList[ownProps.league.leagueid + ""]
    if (!leagueMatchList) {
        return {
            init:false,
            pullRefreshing:false,
            items:null,
        }
    } else {
        return {
            init: true,
            pullRefreshing: leagueMatchList.pullRefreshing,
            items: leagueMatchList.items
        }
    }
}, matchListActin, LeagueInfo)