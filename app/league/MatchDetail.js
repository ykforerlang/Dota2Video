/**
 * Created by pwrd on 16/8/6.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Alert,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    ListView,
    ScrollView,
    RefreshControl,
    Image,
    Dimensions,
    InteractionManager,
} from 'react-native';

import commonStyles from '../common/commonStyle'
import Button from '../common/Button'
import Video from '../good_video/Video'
import commonComponent from '../common/commonComponent'

import FetchNetData from '../common/FetchNetData'
import constant, {picServerUrl} from '../common/constant'
import dotaBaseData from '../common/dotaBaseData'
import Util from '../common/util'
import * as matchDetailAction from '../actions/matchDetail'

class MatchDetail extends React.Component {
    constructor(props) {
        super(props)

        this.navigator = props.navigator
        this.shouldComponentUpdate = React.addons.PureRenderMixin.shouldComponentUpdate.bind(this);


        this.state = {
            renderHoldPlace: true
        }
    }

    componentDidMount() {
        const {actions, matchInfo, matchDetail} = this.props


        InteractionManager.runAfterInteractions(() => {
            if (!matchDetail) {
                this.state.renderHoldPlace = false
                actions.initReq(matchInfo.matchId)
            } else {
                this.setState({
                    renderHoldPlace: false
                })
            }
        });
    }

    render() {
        const {matchDetail} = this.props
        let playerDetail = null
        if (!matchDetail || this.state.renderHoldPlace) {
            playerDetail = commonComponent.loadData(styles.loadData, 'small')
        } else {
            console.log("....before players")
            const playerList = matchDetail.players

            playerDetail = [<Text style={styles.campName} key="radiant">天辉</Text>]
            playerDetail = playerDetail.concat(playerList.slice(0, 5).map((ele, index) => {
                return this._renderRow(ele, index)
            }))
            playerDetail.push(<Text style={styles.campName} key="dire">夜魇</Text>)
            playerDetail = playerDetail.concat(playerList.slice(5).map((ele, index) => {
                return this._renderRow(ele, index + 5)
            }))

            playerDetail.push(<View style={styles.holdSpace} key="holdSpace"></View>)
        }

        return (
            <ScrollView>
                {this._title()}

                {playerDetail}
            </ScrollView>
        )
    }

    _title() {
        const {matchDetail} = this.props
        const {matchId, radiantTeam, direTeam} = this.props.matchInfo

        return (
            <View style={styles.title}>
                <View style={commonStyles.flexRow}>
                    <Text style={commonStyles.fs14Flex1L}>比赛id: {matchId}</Text>
                    <Text style={commonStyles.fs14Flex1L}>时长: {matchDetail ? matchDetail.duration : '-分-秒'}</Text>
                </View>
                <View style={[commonStyles.flexRow, styles.titleSecondLine]}>
                    <Text style={commonStyles.fs14Flex1L}>人头: {matchDetail ? matchDetail.radiantScore + "/" + matchDetail.direScore : "-/-"}</Text>
                    <Text style={commonStyles.fs14Flex1L}>天辉:{radiantTeam}/夜魇:{direTeam}</Text>
                </View>
                <View style={commonStyles.flexRowJCenter}>
                    <Button onPress={this._handleVideo.bind(this)} value="观看视频" textFontSize={12} style={styles.seeVideo} underlayColor="#808080"/>
                    <Button onPress={this._handleReplay.bind(this)} value="观看录像" textFontSize={12} style={styles.seeReplay} underlayColor="#808080"/>
                </View>
            </View>
        )
    }

    _renderRow(playerInfo, index) {
        const heroId = this.props.matchInfo.heroes[index]
        const heroInfo = dotaBaseData.getHeroData(heroId)
        const itemList = playerInfo.itemList
        return (
            <View style={styles.playerRow} key={index}>
                <View style={styles.playerBrief}>
                    <View style={styles.player}>
                        <Image source={{uri: picServerUrl + playerInfo.icon}} style={styles.playerIcon} />
                        <Text style={commonStyles.fs13}>{playerInfo.name}</Text>
                    </View>
                    <View style={styles.hero}>
                        <Image source={heroInfo.icon} style={styles.heroIcon}/>
                        <Text style={commonStyles.fs13}>{heroInfo.name}</Text>
                    </View>
                    <View style={styles.items}>
                        <View style={commonStyles.flexRow}>
                            <Image source={dotaBaseData.getItemData(itemList[0]).icon} style={styles.itemIcon}/>
                            <Image source={dotaBaseData.getItemData(itemList[1]).icon} style={styles.itemIcon}/>
                            <Image source={dotaBaseData.getItemData(itemList[2]).icon} style={styles.itemIcon}/>
                        </View>

                        <View style={commonStyles.flexRow}>
                            <Image source={dotaBaseData.getItemData(itemList[3]).icon} style={styles.itemIcon}/>
                            <Image source={dotaBaseData.getItemData(itemList[4]).icon} style={styles.itemIcon}/>
                            <Image source={dotaBaseData.getItemData(itemList[5]).icon} style={styles.itemIcon}/>
                        </View>
                    </View>
                </View>

                <View style={styles.detail}>
                    <View style={styles.detailLeft}>
                        <Text style={commonStyles.fs12}>等级: {playerInfo.level}</Text>
                        <Text style={commonStyles.fs12}>金钱: {playerInfo.gold}({playerInfo.goldRate})</Text>
                        <Text style={commonStyles.fs12}>K/D/A: {playerInfo.kills}/{playerInfo.deaths}/{playerInfo.assists}</Text>
                        <Text style={commonStyles.fs12}>治疗: {playerInfo.healing}({playerInfo.healingRate})</Text>
                    </View>
                    <View style={styles.detailRight}>
                        <Text style={commonStyles.fs12}>正/反补: {playerInfo.lastHits}/{playerInfo.denies}</Text>
                        <Text style={commonStyles.fs12}>GPM/XPM: {playerInfo.gpm}/{playerInfo.xpm}</Text>
                        <Text style={commonStyles.fs12}>塔伤害: {playerInfo.towerDamage}({playerInfo.towerDamageRate})</Text>
                        <Text style={commonStyles.fs12}>英雄伤害: {playerInfo.heroDamage}({playerInfo.heroDamageRate})</Text>
                    </View>
                </View>
            </View>
        )
    }

    _handleVideo() {
        const {matchDetail} = this.props

        if (!matchDetail.videoId) {
            Alert.alert("提示", "暂无这场比赛视频")
            return
        }
        this.navigator.push({
            component:Video,
            videoId: matchDetail.videoId
        })
    }

    _handleReplay() {
        //TODO animation
        Alert.alert("提示", "观看replay将于下个版本开放")
    }

}

const styles = StyleSheet.create({

    title: {
        backgroundColor: '#d5d5DC',
        padding:10,
        marginBottom:10,
    },

    titleSecondLine: {
        marginTop: 10,
        marginBottom:10,

    },

    playersTitle: {
        fontSize:15,
        fontWeight:'500',
        backgroundColor:'#e0e0DC',
        padding:10,
    },

    playerRow: {
        marginBottom: 10,
        overflow: 'hidden',
    },
    playerBrief: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efefDC',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    player: {
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center'
    },

    hero: {
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        marginLeft: 5,
        alignItems: 'center',
    },

    items: {
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },

    detail: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        paddingRight: 10,
    },

    detailLeft: {
        flex: 1,
        padding: 5,
    },
    detailRight: {
        flex: 1,
        padding: 5,
        borderLeftWidth: 1,
        borderLeftColor: '#D3D3D3',
        borderStyle: 'solid',
    },
    holdSpace: {
        height:40,
    },
    itemIcon: {
        width:35,
        height:20,
    },
    heroIcon: {
        width:30,
        height:40,
    },
    playerIcon: {
        width:32,
        height:32,
    },
    seeVideo: {
        backgroundColor:'#a0a0a0',
        marginRight:20,
    },
    seeReplay: {
        backgroundColor:'#a0a0a0',
        marginLeft:20,
    },
    campName: {
        fontSize:15,
        fontWeight:'500',
        backgroundColor:'#e5e5DC',
        padding:10
    },

    loadData: {
        marginTop:30,
    }


})

export default Util.ReduxComponent((state, ownProps) => {
    const matchDetail = state.matchDetail[ownProps.matchInfo.matchId]
    return {
        matchDetail
    }
}, matchDetailAction, MatchDetail)