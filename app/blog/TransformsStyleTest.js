/**
 * Created by pwrd on 16/7/7.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    TabBarIOS,
    Image,
    Text,
    View,
    NavigatorIOS,
    ScrollView,
    Animated,
} from 'react-native';

const url = "http://cdn.dota2.com.cn/apps/570/icons/econ/leagues/subscriptions_cybergamer_pro_leagues_season_3.a925dc9e3af44cbe2ae915eff282796a8f8f73c5.png"
export default class TransformsStyleTest extends Component {
    constructor(props) {
        super(props)
        this.ro = new Animated.Value(0)
    }

    componentDidMount() {
        Animated.timing(this.ro, {   // 同时开始旋转
            duration: 6000,
            toValue: 1,
        }).start();                                // 开始执行动画
    }


    render() {
        return (
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Image source={{uri: url}} style={{width:100, height:100, transform :[{rotate:"30deg"}]}}></Image>
                <Image source={{uri: url}} style={{width:100, height:100, transform :[{rotate:"10deg"}]}}></Image>


                <Animated.Image source={{uri: url}} style={{width:100, height:100, transform :[{rotate: this.ro.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    '0deg', '360deg' // 'deg' or 'rad'
                  ],
                })}]}}>

                </Animated.Image>
            </View>
        )

    }
}