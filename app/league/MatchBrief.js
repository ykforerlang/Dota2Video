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
import commonStyles from '../common/commonStyle'

export default class MatchBrief extends Component {

    render() {
        return (
            <View style={styles.detail}>
                <View style={commonStyles.flexRow}>
                    <Text style={commonStyles.fs12Flex2}>比赛ID: {this.props.index}</Text>
                    <Text style={commonStyles.fs12Flex1}>开始: 23:12</Text>
                    <Text style={commonStyles.fs12Flex1}>类型: BO5</Text>
                </View>

                <View style={styles.team}>
                    <View style={commonStyles.flexRow}>
                        <Text style={styles.teamNameRed}>LGD:</Text>
                        <View style={styles.heroIcon}>
                            <Image source={require("../image/hero/1.png")}/>
                            <Image source={require("../image/hero/2.png")}/>
                            <Image source={require("../image/hero/3.png")}/>
                            <Image source={require("../image/hero/4.png")}/>
                            <Image source={require("../image/hero/5.png")}/>
                        </View>
                    </View>
                    <View style={commonStyles.flexRow}>
                        <Text style={styles.teamNameBlue}>EHOME:</Text>
                        <View style={styles.heroIcon}>
                            <Image source={require("../image/hero/6.png")}/>
                            <Image source={require("../image/hero/7.png")}/>
                            <Image source={require("../image/hero/8.png")}/>
                            <Image source={require("../image/hero/9.png")}/>
                            <Image source={require("../image/hero/10.png")}/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    detail: {
        backgroundColor: '#f0f0f0',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10,
        marginTop:5,
        overflow:'hidden',
    },
    team: {paddingTop: 5},
    teamNameRed: {fontSize: 12, fontStyle: 'italic', flex: 2, color: 'red'},
    teamNameBlue: {fontSize: 12, fontStyle: 'italic', flex: 2, color: 'blue'},
    heroIcon: {flexDirection: 'row', flex: 3, alignItems:'center', justifyContent:'center',}
})