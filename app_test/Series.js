/**
 * Created by yk on 2016/7/14.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

import AccordionTitle from 'AccordionTitle'

import TeamData from './base_data/teamBriefs.json'

export default class Series extends  Component {
    constructor(props) {
        super(props)
    }

    render() {
        const matches = this.props.matches
        const brief = {
            radiantTeamId: this.props.radiant_team_id,
            direTeamId: this.props.dire_team_id,
            createTime: this.props.create_time,
            seriesType: this.props.series_type
        }

        let radiantIcon = "./image/team/" + brief.radiantTeamId + ".jpg"
        let direIcon = "./image/team/" + brief.direTeamId + ".jpg"
        let seriesStr = "bo1"
        if (brief.seriesType == 0) {
            seriesStr = "bo1"
        }
        if (brief.seriesType == 1) {
            seriesStr = "bo3"
        }
        if (brief.seriesType == 2) {
            seriesStr = "bo5"
        }
        let seriesView =(
            <View style={styles.series}>
                <Text>{brief.createTime}</Text>
                <Text style={{textAlign:'right'}}>{TeamData[brief.radiantTeamId].tag}</Text>
                <Image
                    source={require(radiantIcon)}
                    resizeMode=cover
                />
                <Text>VS</Text>
                <Image
                    source={require(direIcon)}
                    resizeMode=cover
                />
                <Text style={{textAlign:'left'}}>{TeamData[brief.direTeamId].tag}</Text>
                <Text>{seriesStr}</Text>
            </View>
        )

        let matchesView = (
            <View>
                {//TODO
                }
            </View>
        )

        return (
            <AccordionTitle
                header= {seriesView}
                content= {matchesView}/>
        )

    }
}

const styles = StyleSheet.createClass({
    series: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',

    },
})
