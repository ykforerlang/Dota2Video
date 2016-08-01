/**
 * Created by yk on 2016/6/21.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Dimensions,
} from 'react-native';

export default class TitleScorll extends Component {
    constructor(props) {
        super(props)
        this.contentY = 0
    }

    render() {
        const childArray = React.Children.toArray(this.props.children)
        const fix = React.cloneElement(childArray[1],
            {
                style: [childArray[1].props.style, styles.fixedComp],
                key: 'fixedComp',
                ref: comp => this.fixedComp = comp
            })


        return (
            <View style={[this.props.style, {flex:1}]}>
                <ScrollView
                    ref={comp => this.scrollView = comp}
                    contentContainerStyle={styles.scrollContent}
                    bounces={false}
                    scrollEnabled={false}
                    scrollEventThrottle={16}
                    onResponderMove={e =>this._handleMove(e)}
                    onMoveShouldSetResponder={e => this.contentY == 0}
                    onTouchStart={e =>this._initResponder(e)}
                    onScroll={(event) => this._handleScroll(event)}
                    stickyHeaderIndices={[1]}
                >
                    {childArray}
                </ScrollView>

            </View>
        )
    }

    _handleScroll(e) {
       /* this.contentY = e.nativeEvent.contentOffset.y
        if (this.contentY >= this.props.fixHeight) {
            this.fixedComp.setNativeProps({
                style: {
                    opacity: 1,
                },
            })
        }
        if (this.contentY < this.props.fixHeight) {
            this.fixedComp.setNativeProps({
                style: {
                    opacity: 0,
                },
            })
        }*/

    }

    _initResponder(e) {
        console.warn("contentY:", this.contentY)
        if (this.contentY == 0) {
            let ne = e.nativeEvent
            this.startTouchY = ne.pageY
            return true
        }
        return false
    }

    _handleMove(e) {
        console.warn("handleMove...")
        if(this.contentY != 0) return

        let ne = e.nativeEvent
        if (this._getDirection(ne) == 'down') {
            console.warn("67")
            this.scrollView.setNativeProps({
                scrollEnabled:false,
            })
        } else {
            console.warn("83")
            this.scrollView.setNativeProps({
                scrollEnabled:true,
            })
        }
        this.forceUpdate()

    }

    _getDirection(ne) {
        return ne.pageY > this.startTouchY ? 'down' : 'up'
    }

}

const styles = StyleSheet.create({

    fixedComp: {
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0,
    },

    scrollContent: {
        flexDirection: 'column',
        alignItems: 'center',
    }
})
