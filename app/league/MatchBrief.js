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

import Orientation from 'react-native-orientation'
import MatchDetail from './MatchDetail'
import commonStyles from '../common/commonStyle'

import dotaBaseData from '../common/dotaBaseData'

export default class MatchBrief extends Component {

    render() {
        const {matchId, startTime, type, radiantTeam, direTeam, heroes} = this.props.matchInfo

        return (
            <TouchableHighlight
                style={styles.root}
                underlayColor="#888888"
                onPress={this._handlePress.bind(this)}>
                <View style={styles.detail}>
                    <Text style={commonStyles.fs13Flex1}>比赛ID: {matchId}</Text>

                    <View style={styles.briefText}>
                        <Text numberOfLines={1} style={commonStyles.fs12Flex1}>{radiantTeam + " 对阵 " + direTeam}</Text>
                        <Text style={commonStyles.fs12Flex1}>开始: {startTime}</Text>
                        <Text style={commonStyles.fs12Flex1}>类型: {type}</Text>
                    </View>

                    <View style={styles.heroAll}>

                        <View style={styles.heroIcon}>
                            <Image style={styles.icon}
                                   source={dotaBaseData.getHeroData(heroes[0]).icon}/>
                            <Image style={styles.icon}
                                   source={dotaBaseData.getHeroData(heroes[1]).icon}/>
                            <Image style={styles.icon}
                                   source={dotaBaseData.getHeroData(heroes[2]).icon}/>
                            <Image style={styles.icon}
                                   source={dotaBaseData.getHeroData(heroes[3]).icon}/>
                            <Image style={styles.icon}
                                   source={dotaBaseData.getHeroData(heroes[4]).icon}/>

                        </View>

                        <Text style={styles.vs}>VS</Text>

                        <View style={styles.heroIcon}>
                            <Image style={styles.icon}
                                   source={dotaBaseData.getHeroData(heroes[5]).icon}/>
                            <Image style={styles.icon}
                                   source={dotaBaseData.getHeroData(heroes[6]).icon}/>
                            <Image style={styles.icon}
                                   source={dotaBaseData.getHeroData(heroes[7]).icon}/>
                            <Image style={styles.icon}
                                   source={dotaBaseData.getHeroData(heroes[8]).icon}/>
                            <Image style={styles.icon}
                                   source={dotaBaseData.getHeroData(heroes[9]).icon}/>
                        </View>

                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    _handlePress() {
        this.props.navigator.push({
            component: MatchDetail,
            matchInfo: this.props.matchInfo,
        })
    }
}

const styles = StyleSheet.create({
    root:{
        overflow: 'hidden',
        marginTop:5,
    },
    detail: {
        backgroundColor: '#e0e0e0',
        paddingTop: 10,
        paddingBottom: 10,
        overflow: 'hidden',
    },

    briefText: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },

    vs: {
        marginLeft: 10,
        marginRight: 10,
    },

    heroAll: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    heroIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    icon: {
        width: 22,
        height: 66,
    }
})