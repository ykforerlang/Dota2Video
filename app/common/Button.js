/**
 * Created by yk on 2016/7/29.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Animated,
    Dimensions,
} from 'react-native';

export default class Button extends Component {
    static propTypes = {
        ...Text.protoTypes,

        underlayColor: React.PropTypes.string,
        value: React.PropTypes.string.isRequired,
        textFontSize: React.PropTypes.number,
    }

    constructor(props) {
        super(props)
        this._underlayColor = props.underlayColor || 'blue'
    }

    render() {
        return (
            <TouchableHighlight
                style={[styles.button, this.props.style]}
                onPress={this.props.onPress.bind(this)}
                underlayColor={this._underlayColor}
            >
                <View>
                    <Text style={{fontSize:this.props.textFontSize}}> {this.props.value}</Text>
                </View>
            </TouchableHighlight>
        )
    }

}

const styles = StyleSheet.create({
    button: {
        padding: 5,
        borderColor: 'grey',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        backgroundColor: 'blue',
    }
})