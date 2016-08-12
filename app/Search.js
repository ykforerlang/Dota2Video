/**
 * Created by pwrd on 16/6/12.
 */

import React, {Component} from 'react';

import {
    Animated,
    Easing,
    View,
    StyleSheet,
    ScrollView,
    ListView,
    Dimensions,
    TouchableHighlight,
    Image,
    Text,
} from 'react-native';

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foo: false
        }

    }

    componentDidMount() {
        //TODO ?
        this.setState({
            foo: true
        })

    }

    render() {
        console.warn("hi....")
        return (
            <View style={{flex:1}}>
                {this.state.foo ? <Text> hi</Text> : <Text>hi2</Text>}
            </View>
        )
    }



};


