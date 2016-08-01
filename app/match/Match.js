/**
 * Created by pwrd on 16/7/18.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
} from 'react-native';

export default class Match extends React.Component {

    render() {

        return (
            <View style={styles.root}>
                <View style={styles.brief}>
                    <View style={styles.player}>
                        <Image source={require("../../app/image/player/514364.jpg")}/>
                        <Text style={styles.briefText} numberOfLines={2}>天穹守望者fdsfsfsfsf</Text>
                    </View>
                    <View style={styles.hero}>
                        <Image source={require("../../app/image/hero/1.png")}/>
                        <Text style={styles.briefText} numberOfLines={2}>天穹守望者</Text>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemLine}>
                            <Image source={require("../../app/image/item/1.png")}/>
                            <Image source={require("../../app/image/item/2.png")}/>
                            <Image source={require("../../app/image/item/3.png")}/>
                        </View>

                        <View style={styles.itemLine}>
                            <Image source={require("../../app/image/item/4.png")}/>
                            <Image source={require("../../app/image/item/5.png")}/>
                            <Image source={require("../../app/image/item/6.png")}/>
                        </View>
                    </View>
                </View>
                <View>

                </View>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },

    brief: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    player: {
        flex: 1,
        flexDirection: 'row',
        width: 10,
        overflow: 'hidden',
        alignItems: 'center'
    },

    hero: {
        flex: 1,
        flexDirection: 'row',
        width: 10,
        overflow: 'hidden',
        marginLeft: 5,
        alignItems: 'center',
    },

    items: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        width: 10,
        overflow: 'hidden',
        paddingTop: 5,
        paddingBottom: 5,
    },
    briefText:{
        fontSize: 13,
        width:52,
        overflow:'hidden',
    },
    itemLine:{
        flexDirection:'row'
    }

})