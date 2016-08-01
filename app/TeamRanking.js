/**
 * Created by pwrd on 16/6/12.
 */
import React, {Component} from 'react';

import {
    Animated,
    Easing,
    View,
    StyleSheet,
    ScrollView,
    ListView,
    Dimensions,
    TouchableHighlight,
    Image,
    Text,
} from 'react-native';

import MatchBrief from './league/MatchBrief'

export default class TeamRanking extends Component {
    constructor(props) {
        super(props)

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        let arr = []
        for (let i = 0;i<1000; i++){
            arr.push(i)
        }

        this.state = {
            dataSource: ds.cloneWithRows(arr)
        }

    }

    componentDidMount() {
    }


    render() {
        return (
            <ListView
                style={{borderColor:'blue', borderTopWidth:4, overflow:'hidden'}}
                ref={(comp => this._listView = comp)}
                initialListSize={10}
                removeClippedSubviews={true}
                contentContainerStyle={styles.content}
                dataSource={this.state.dataSource}
                renderRow={(ele, sId, rId) => this._renderRow(ele, sId, rId)}
            />
        )
    }

    _renderRow(ele, sId, rId) {
        return(
            <MatchBrief index={ele} pic={false}/>
        )
    }


};



const styles = StyleSheet.create({
    content:{
        overflow:'hidden',
        paddingTop:50,
        borderColor:'red',
        borderTopWidth:2,
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