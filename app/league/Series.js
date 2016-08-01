/**
 * Created by pwrd on 16/7/25.
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

import MatchBrief from './MatchBrief'

export default class Series extends Component {

    render() {
        return (
            <View>
                <View style={styles.seriesBrief}>
                    <Text style={styles.seriesTime}>12/01</Text>
                    <View style={styles.seriesTeam}>
                        <Text numberOfLines={1} style={[styles.teamText,{textAlign:'right'}]}>EHOMEsfdsfsff</Text>
                        <Image source={require("../image/team/1105664.jpg")} style={styles.teamIcon}/>
                        <Text style={styles.vs}>VS</Text>
                        <Image source={require("../image/team/1951061.jpg")} style={styles.teamIcon}/>
                        <Text numberOfLines={1} style={styles.teamText}>EHOMEsfdsfsff</Text>
                    </View>
                    <Text style={styles.type}>BO5</Text>
                </View>

                <MatchBrief/>
                <MatchBrief/>
                <MatchBrief/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    seriesBrief: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 10,
        overflow: 'hidden',
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:10,
        paddingRight:10,
        borderTopWidth:2,
        borderTopColor:'grey',

    },

    seriesTime: {
        fontSize: 13,
        fontStyle: 'italic',
        flex: 2,
    },


    teamText: {
        fontSize: 13,
        overflow: 'hidden',
        flex:1,
    },

    teamIcon: {
        width: 32,
        height: 24,
    },

    vs: {
        marginLeft: 5,
        marginRight: 5,
        fontSize: 14,
        fontWeight: '600',
        fontStyle: 'italic',
    },

    seriesTeam: {
        flex: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },

    type: {
        fontSize: 13,
        textAlign: 'right',
        fontStyle: 'italic',
        flex: 1,
    },

})