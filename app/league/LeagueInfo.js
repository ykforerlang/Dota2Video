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

import fetchNetData, {getLeagueMatches} from '../common/fetchNetData'

import leagueMatches from '../../fake_data/leagueMatches.json'

export default class LeagueInfo extends React.Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: ((r1, r2) => r1 !== r2),
            sectionHeaderHasChanged: ((r1, r2) => r1 !== r2),
        })
        this.state = {dataSource: ds.cloneWithRowsAndSections({})}
        this._rc = <RefreshControl
            refreshing = {false}/>
    }

    componentDidMount() {
        this.setState({
           dataSource: this.state.dataSource.cloneWithRowsAndSections(leagueMatches.data)
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
        if (rowData == "_err") {
            return <Text>加载赛事出错</Text>
        }

        return <MatchBrief matchInfo={rowData} navigator={this.props.navigator}/>
    }

    _renderHeader(sectionData, sectionID) {
        return <Text style={styles.sectionTitle}>{sectionID}</Text>
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
    }
})