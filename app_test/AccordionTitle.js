/**
 * Created by yk on 2016/7/14.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    ScrollView,
} from 'react-native';

export default class AccordionTitle extends Component {
    constructor(props) {
        super(props)
        this.conHeight = new Animated.Value(0)
        this.showDuration = props.showDuration
        this.hideDuration = props.hideDuration
        this.realConHeight = 0
        this.contentShow = false
   }

    render() {
        const header = this.props.header
        const content = this.props.content
        const contentStyleId = content.props.style
        const contentStyle = StyleSheet.flatten(contentStyleId)
        if (contentStyle && contentStyle.height) {
            this.realConHeight = contentStyle.height
        } else {
            console.warn("content height must exist")
        }

        return (
            <View>
                <TouchableHighlight onPress={this._handlePress}>
                    {header}
                </TouchableHighlight>

                <Animated.View style={{
                overflow:'hidden',
                height:conHeight,
                }}>
                    {content}
                </Animated.View>
            </View>
        )
    }

    _handlePress() {
        if (! this.contentShow) {
            this.contentShow = !this.contentShow
            Animated.timing(
                this.conHeight,
                {
                    toValue: this.realConHeight,
                    duration: this.showDuration || 500
                }
            ).start();
        } else {
            this.contentShow = !this.contentShow
            Animated.timing(
                this.conHeight,
                {
                    toValue: 0,
                    duration: this.hideDuration || 50
                }
            ).start();
        }
    }

}