/**
 * Created by yk on 2016/8/25.
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
    Alert,
} from 'react-native';

import Button from '../common/Button'
import {picServerUrl} from '../common/constant'

export default class MyIndex extends Component {

    render() {
        const icon = require("../images/login.jpg")

        return (
            <View style={styles.content}>
                <Image source={icon}
                       style={styles.icon}
                />
                <Button value="登陆/注册"
                        style={styles.button}
                        textFontSize={15}
                        underlayColor="#888888"
                        onPress={() => {
                              //TODO login
                              Alert.alert("提示", "观看注册将于下个版本开放")
                        }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f0f0f0',
    },
    icon: {
        width:140,
        height:90,
        marginBottom:20
    },
    button: {
        marginTop:20,
        backgroundColor:'#c0c0c0',
        padding:10,
    }
})