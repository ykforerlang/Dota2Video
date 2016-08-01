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

import League from './League'
import Series from './Series'
import MatchBrief from './MatchBrief'
import AccordionTitle from '../common/AccordionTitle'

export default class LeagueInfo extends React.Component {
    constructor(props) {
        super(props)
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {dataSource: this.ds.cloneWithRows(['_rc'])}
        this._rc = <RefreshControl
            refreshing = {true}/>
    }

    componentDidMount() {

    }

    render() {
        const rc = <RefreshControl
            style= {{marginTop:200, borderTopWidth:4, borderColor:'green', borderBottomWidth:4, borderBottomColor:'yellow', backgroundColor:'yellow'}}
            refreshing = {true}/>

        return (
            <ListView
                style={{borderTopWidth:2, borderColor:'blue',}}
                initialListSize={10}
                contentContainerStyle={styles.content}
                dataSource={this.state.dataSource}
                renderRow={(sub) => this._renderRow(sub)}
                showsVerticalScrollIndicator={true}
                removeClippedSubviews={true}
                renderHeader ={this._header.bind(this)}
            />
        )
    }

    _header() {
        return (
            <View style={commonStyles.ofHidden}>
                <League league={this.props.league} withName={false} desStyle={styles.leagueDesStyle}/>
                <Text style={styles.title}>系列赛</Text>
            </View>
        )
    }

    _renderRow(rowData) {
        if (rowData == "_rc") {
            return commonComponent.loadData()
        } else {
            return <MatchBrief/>
        }
    }


}

const styles = StyleSheet.create({
    content:{
        overflow:'hidden',
        borderTopWidth:2,
        borderColor:'red',
    },
    leagueDesStyle:{
        color:'black',
    },


    title:{
        fontSize:15,
        fontWeight:'600',
        textAlign:'center',
        backgroundColor: '#f0f0f0',
        marginTop:2,
        padding:10,
        marginBottom:2,
        fontStyle:'italic',
    },

    seriesBrief:{
        marginTop:2,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: '#f0f0f0',
        paddingRight:5,
        paddingLeft:5,
        paddingTop:10,
        paddingBottom:10,
    },

    seriesTime: {
        fontSize:10,
        fontStyle:'italic',
        width:90,
    },

    teamText: {
        fontSize:10,
        width:60,
        overflow:'hidden',
        flex:1,
    },

    teamIcon: {
        width:32,
        height:24,
        flex:1,
    },

    vs: {
        marginLeft:5,
        marginRight:5,
        fontSize:14,
        fontWeight:'600',
        fontStyle:'italic',
        flex:1,
    },

    seriesTeam: {
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },

    type:{
        fontSize:12,
        textAlign:'right',
        fontStyle:'italic',
    },

    downTag: {
        width:30,
        textAlign:'center',
    }
})