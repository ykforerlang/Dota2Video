/**
 * Created by pwrd on 16/7/2.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    TabBarIOS,
    Text,
    View,
    ScrollView,
    NavigatorIOS,
} from 'react-native';

export default class EventSysTest extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={{alignItems:'center',}}
                        onScroll={e =>this.printObject(e)}
                        scrollEventThrottle={500}
                        onMoveShouldSetResponder={e=>this.printObject(e)}
                        onResponderMove={e => {
                        let ne = e.nativeEvent
        console.warn("pageY", ne.pageY)
        console.warn("locationY", ne.locationY)

                        }}
            >
                {this.fakeList()}
            </ScrollView>
        )
    }

    fakeList() {
        let result = []
        for (let i = 0; i < 30; i++) {
            result.push(<Text style={{width:150, height:40, borderWidth:1, marginTop:5}} key={i}>{"teset" + i}</Text>)
        }
        console.warn("now,", new Date().getTime())
        return result
    }

    printObject(e, view) {
        console.warn(e.timeStamp)
        console.warn(e.touches)
        return true
    }

    printObjectMove(e, view) {
        console.warn("move:", moveCount, "x:", e.nativeEvent.pageX, "y:", e.nativeEvent.pageY)
        moveCount = moveCount + 1
    }
}