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

export default class MatchBrief extends Component {
    componentDidMount() {
        Orientation.unlockAllOrientations()
    }

    render() {
        const {matchId, startTime, title, radiantTeam, direTeam} = this.props.matchInfo
        const start = new Date(startTime)

        return (
            <TouchableHighlight
                style={styles.root}
                underlayColor="#888888"
                onPress={this._handlePress.bind(this)}>
                <View style={styles.detail}>
                    <Text style={commonStyles.fs13Flex1}>比赛ID: {matchId}</Text>

                    <View style={styles.briefText}>
                        <Text numberOfLines={1} style={commonStyles.fs12Flex1}>{radiantTeam + " 对阵 " + direTeam}</Text>
                        <Text style={commonStyles.fs12Flex1}>开始: {start.getHours() + ':' + start.getMinutes()}</Text>
                        <Text style={commonStyles.fs12Flex1}>类型: {title}</Text>
                    </View>

                    <View style={styles.heroAll}>

                        <View style={styles.heroIcon}>
                            <Image style={styles.icon}
                                   source={{uri:"http://cdn.dota2.com.cn/apps/dota2/images/heroes/antimage_selection.png"}}/>
                            <Image style={styles.icon}
                                   source={{uri:"http://cdn.dota2.com.cn/apps/dota2/images/heroes/antimage_selection.png"}}/>
                            <Image style={styles.icon}
                                   source={{uri:"http://cdn.dota2.com.cn/apps/dota2/images/heroes/antimage_selection.png"}}/>
                            <Image style={styles.icon}
                                   source={{uri:"http://cdn.dota2.com.cn/apps/dota2/images/heroes/antimage_selection.png"}}/>
                            <Image style={styles.icon}
                                   source={{uri:"http://cdn.dota2.com.cn/apps/dota2/images/heroes/antimage_selection.png"}}/>

                        </View>

                        <Text style={styles.vs}>VS</Text>

                        <View style={styles.heroIcon}>
                            <Image style={styles.icon}
                                   source={{uri:"http://cdn.dota2.com.cn/apps/dota2/images/heroes/antimage_selection.png"}}/>
                            <Image style={styles.icon}
                                   source={{uri:"http://cdn.dota2.com.cn/apps/dota2/images/heroes/antimage_selection.png"}}/>
                            <Image style={styles.icon}
                                   source={{uri:"http://cdn.dota2.com.cn/apps/dota2/images/heroes/antimage_selection.png"}}/>
                            <Image style={styles.icon}
                                   source={{uri:"http://cdn.dota2.com.cn/apps/dota2/images/heroes/antimage_selection.png"}}/>
                            <Image style={styles.icon}
                                   source={{uri:"http://cdn.dota2.com.cn/apps/dota2/images/heroes/antimage_selection.png"}}/>
                        </View>

                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    _handlePress() {
        this.props.navigator.push({
            component: MatchDetail,
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