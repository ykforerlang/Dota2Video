import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Animated,
    Dimensions,
} from 'react-native';

const tarTextInitOpa = 0.7
export default class LeagueTypeBar extends Component {
    constructor(props) {
        super(props)
        this.tarStyle = props.tarStyle
        this.lineStyle = props.lineStyle
        this.windowWidth = Dimensions.get("window").width
        this.tarWidth = props.tarStyle.tarWidth * this.windowWidth
        this.lineMarginLR = props.lineStyle.marginLR * this.windowWidth
    }

    renderTabOption(name, page) {
        const contentNum = this.props.tabs.length
        const opacity = this.props.scrollValue.interpolate({
            inputRange: this._opaInputRange(contentNum), outputRange: this._opaOutputRange(contentNum, page),
        })

        return (
            <TouchableWithoutFeedback key={page} onPress={() => this.props.goToPage(page)}>
                <Animated.Text style={{
            width:this.tarWidth,
            textAlign:"center",
            opacity,}}>
                    {name}
                </Animated.Text>
            </TouchableWithoutFeedback>
        )
    }

    _opaInputRange(contentNum) {
        let result = []
        for (let i = 0; i < contentNum; i++) {
            result.push(i)
        }
        return result
    }

    _opaOutputRange(contentNum, page) {
        let result = []
        for (let i = 0; i < contentNum; i++) {
            if (i == page) {
                result.push(1)
            } else {
                result.push(tarTextInitOpa)
            }
        }
        return result
    }

    render() {
        const contentNum = this.props.tabs.length
        const leftStart = (this.windowWidth - contentNum * this.tarWidth) / 2
        const leftEnd = (leftStart) + (contentNum - 1) * this.tarWidth
        const left = this.props.scrollValue.interpolate({
            inputRange: [0, contentNum - 1,], outputRange: [leftStart, leftEnd,],
        });

        return (
            <View style={styles.tabs}>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}

                <Animated.View style={[styles.line, { left,
                height:this.lineStyle.height,
                backgroundColor:this.lineStyle.lineColor,
                width:this.tarWidth - 2 * this.lineMarginLR,
                marginRight:this.lineMarginLR,
                marginLeft:this.lineMarginLR,}]}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabs: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        position: "absolute",
        bottom: 0,
    }
});

