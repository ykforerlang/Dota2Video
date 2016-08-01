/**
 * Created by yk on 2016/8/1.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Animated,
    Dimensions,
} from 'react-native';

export default class WtTarBar extends Component {
    static propTypes = {
        ...View.protoTypes,

        initOpacity: React.PropTypes.number,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
        goToPage: React.PropTypes.func,
        underlineColor: React.PropTypes.string.isRequired,
        underlineHeight: React.PropTypes.number.isRequired,
    }

    constructor(props) {
        super(props)

        this.initOpacity = props.initOpacity || 0.5
        this.itemList = props.tabs


        this._scrollValueRange = this._initScrollValueRange(this.itemList.length)
        this._itemX =new Array(this.itemList.length)
        this._itemWidth = new Array(this.itemList.length)
        this._activeRef = null
        this._layoutCount = 0
    }

    shouldComponentUpdate() {
        return false
    }

    /*componentDidMount() {
        this._activeRef.setValue(0)// remove border
    }*/


    render() {
        const left = this.props.scrollValue.interpolate({
            inputRange: this._scrollValueRange,
            outputRange: this._itemX,
        })
        const width = this.props.scrollValue.interpolate({
            inputRange: this._scrollValueRange,
            outputRange: this._itemWidth,
        })
        const underLineStyle = {
            position: 'absolute',
            height:this.props.underlineHeight,
            backgroundColor: this.props.underlineColor,
            bottom:0,
            left,
            width,
        }

        return (
            <View style={[styles.tarBar, this.props.style]}

            >
                {this.itemList.map((item, index) => {
                    return this._tarBarItem(index, item)
                })}

                <Animated.View
                    style={underLineStyle}
                    ref={comp => this._underLine = comp}
                />
            </View>
        )
    }

    _tarBarItem(index, title) {
        const opa = this.props.scrollValue.interpolate({
            inputRange:this._scrollValueRange,
            outputRange: this._getOutputRange(this.itemList.length, index, this.initOpacity),
        })

        /*// 处理 underline 可能出现的闪动
        let  borderHeight
        if (index == this.props.activeTab) {
            this._activeRef = new Animated.Value(this.props.underlineHeight)
            borderHeight = this._activeRef
        } else {
            borderHeight = new Animated.Value(0)
        }*/

        return  (
            <TouchableWithoutFeedback
                key={title}
                onLayout={(event) => this._onLayout(event, index)}
            >
               <Animated.View
                   style={[styles.tarBarItem, {opacity:opa, borderBottomColor: this.props.underlineColor, borderBottomWidth:borderHeight},]}
                   onPress={() => this.props.goToPage(index)}
               >
                <Text>{title}</Text>
               </Animated.View>
            </TouchableWithoutFeedback>
        )
    }

    _initScrollValueRange(length) {
        if (length <= 0) {
            console.warn("tar item should >0")
            return
        }
        if (length == 1) return [0]
        if (length == 2) return [0, 1]
        if (length == 3) return [0, 1, 2]

        const r = []
        for (let i = 0; i< length; i++) {
            r.push(i)
        }
        return r
    }
    _getOutputRange(length, index, initOpa) {
        if (length <= 0) {
            console.warn("tar item should >0")
            return
        }

        const r = []
        for (let i = 0; i< length; i++) {
            if (i == index) {
                r.push(1)
            } else {
                r.push(initOpa)
            }
        }
        return r
    }


    _onLayout(event, index) {
        this._layoutCount ++

        const layout = event.nativeEvent.layout
        this._itemX[index] = layout.x
        this._itemWidth[index] = layout.width

        if (this._layoutCount == this.itemList.length) {
            //触发动画value的计算. 因为开始render的时候 _itemX  _itemWidth 可能还没有init
            this._activeRef.setValue(0)// remove border
            this.props.scrollValue.setValue(this.props.activeTab)
        }
    }

}

const styles = StyleSheet.create({
    tarBar: {
        flexDirection:'row',
        justifyContent:'space-around',
        height:30,
    },
    tarBarItem : {
        justifyContent:'center',
    }


})