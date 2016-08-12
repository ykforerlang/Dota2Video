/**
 * Created by pwrd on 16/8/6.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    ListView,
    ScrollView,
    RefreshControl,
    Image,
    Dimensions,
} from 'react-native';

import commonStyles from '../common/commonStyle'
import Button from '../common/Button'

export default class MatchDetail extends React.Component {

    render() {
        return (
            <ScrollView>
                {this._title()}
                <Text style={{fontSize:15, fontWeight:'500',backgroundColor:'#e5e5DC', padding:10}}>天辉</Text>
                {[1, 2, 3, 4, 5].map((ele, index) => {
                    return this._renderRow(ele, index)
                })}
                <Text style={{fontSize:15, fontWeight:'500',backgroundColor:'#e5e5DC', padding:10}}>夜魇</Text>
                {[1, 2, 3, 4, 5].map((ele, index) => {
                    return this._renderRow(ele, index)
                })}
                <View style={styles.holdSpace}></View>
            </ScrollView>
        )
    }

    _title() {
        return (
            <View style={styles.title}>
                <View style={commonStyles.flexRow}>
                    <Text style={commonStyles.fs14Flex1L}>比赛id: 123234455</Text>
                    <Text style={commonStyles.fs14Flex1L}>时长: 60分88秒</Text>
                </View>
                <View style={[commonStyles.flexRow, styles.titleSecondLine]}>
                    <Text style={commonStyles.fs14Flex1L}>人头: 33/40</Text>
                    <Text style={commonStyles.fs14Flex1L}>天辉:LGD/夜魇:EHOME</Text>
                </View>
                <View style={commonStyles.flexRowJL}>
                    <Button onPress={()=>{}} value="观看视频" textFontSize={12} style={{backgroundColor:'#a0a0a0', marginRight:20}} underlayColor="#808080"/>
                    <Button onPress={()=>{}} value="观看录像" textFontSize={12} style={{backgroundColor:'#a0a0a0', marginRight:20}} underlayColor="#808080"/>
                </View>
            </View>
        )
    }

    _renderRow(playerInfo, index) {
        return (
            <View style={styles.playerRow} key={index}>
                <View style={styles.playerBrief}>
                    <View style={styles.player}>
                        <Image source={require("../images/player/514364.jpg")}/>
                        <Text style={commonStyles.fs13}>天穹守望者</Text>
                    </View>
                    <View style={styles.hero}>
                        <Image source={require("../images/hero/hero_1.png")}/>
                        <Text style={commonStyles.fs13}>天穹守望者</Text>
                    </View>
                    <View style={styles.items}>
                        <View style={commonStyles.flexRow}>
                            <Image source={require("../images/item/item_1.png")}/>
                            <Image source={require("../images/item/item_2.png")}/>
                            <Image source={require("../images/item/item_3.png")}/>
                        </View>

                        <View style={commonStyles.flexRow}>
                            <Image source={require("../images/item/item_4.png")}/>
                            <Image source={require("../images/item/item_5.png")}/>
                            <Image source={require("../images/item/item_6.png")}/>
                        </View>
                    </View>
                </View>

                <View style={styles.detail}>
                    <View style={styles.detailLeft}>
                        <Text style={commonStyles.fs12}>等级: 11</Text>
                        <Text style={commonStyles.fs12}>金钱: 1678</Text>
                        <Text style={commonStyles.fs12}>K/D/A: 10/22/3</Text>
                        <Text style={commonStyles.fs12}>治疗: 2000(30%)</Text>
                    </View>
                    <View style={styles.detailRight}>
                        <Text style={commonStyles.fs12}>正/反补: 200/20</Text>
                        <Text style={commonStyles.fs12}>GPM/XPM: 780/560</Text>
                        <Text style={commonStyles.fs12}>对塔伤害: 5000(30%)</Text>
                        <Text style={commonStyles.fs12}>对英雄伤害: 5000(30%)</Text>
                    </View>
                </View>
            </View>
        )
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
    }
})