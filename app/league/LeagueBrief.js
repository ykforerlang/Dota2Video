/**
 * Created by yk on 2016/7/19.
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

import LeagueInfo from './LeagueInfo'

import leaguePricePool from '../base_data/leaguePricePool.json'
import constant from '../common/constant'
const picServerUrl = constant.picServerUrl

export default class LeagueBrief extends React.Component {
    constructor(props) {
        super(props)
        this.navigator = props.navigator
    }

    setNativeProps(nativeProps) {
        this._root.setNativeProps(nativeProps);
    }

    render() {
        const league = this.props.league
        let iconPath = picServerUrl + 'league/' + league.id + '.png'
        if (league.id == 4664 || league.id == 4768) {
            iconPath = picServerUrl + 'league/' + "TI6.png"
        }

        const withName = this.props.withName
        const pricePool = leaguePricePool[league.id + ""]

        return (
                <View style={[styles.brief, this.props.style]} ref={component => this._root = component}>
                    <View>
                        <Text style={styles.tag}>{league.free_to_spectate ? "门票" : "免费"}</Text>
                        <Image source={{uri: iconPath}} style={{width:80,height:53}}></Image>
                    </View>
                    <View style={styles.desAndPrice}>
                        <View style={styles.nameAndPp}>
                            {withName ? <Text style={styles.name} numberOfLines={1}>{league.name}</Text> : null}
                            {pricePool ? <Text style={styles.pricePool}>奖金:{pricePool}$</Text> : null}
                        </View>
                        <Text numberOfLines={3} style={[styles.description, this.props.desStyle]}>{league.description}</Text>
                    </View>
                </View>
        )
    }
}
const styles = StyleSheet.create({

    brief: {
        backgroundColor: '#d0d0d0',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    tag: {
        position: 'absolute',
        backgroundColor: '#DA70D6',
        fontSize: 13,
        fontStyle: 'italic',
    },
    desAndPrice: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 5,
    },
    description: {
        overflow: 'hidden',
        fontSize: 13,
        color: 'grey',
    },
    pricePool: {
        flex: 1,
        fontSize: 13,
        color: '#CD853F',
        fontStyle: 'italic',
        textAlign: 'right',
    },
    nameAndPp: {
        flexDirection: 'row',
    },
    name: {
        flex: 1,
        fontSize: 14,
        overflow: 'hidden',
    }
})
