/**
 * Created by pwrd on 16/7/3.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    TabBarIOS,
    Text,
    View,
    NavigatorIOS,
    ScrollView,
} from 'react-native';


export default class ScrollViewTitleTest extends Component {
    constructor(props) {
        super(props)
        this.startTouchY = 0
        this.contentY = 0
    }

    render() {
        let a= (
                <ScrollView
                    ref={comp => this.scrollView = comp}
                    contentContainerStyle={styles.scrollContent}
                    bounces={false}
                    scrollEventThrottle={500}
                    onMomentumScrollEnd={e=> this._handleScroll(e)}
                    onScrollEndDrag={e=> this._handleScroll(e)}
                    onTouchStart={e => this.startTouchY = e.nativeEvent.pageY}
                    onTouchMove={e => this._handleMove(e)}
                    onTouchEnd={e => this._handleEnd(e)}
                    onScroll={e => this._handleScroll(e)}
                    stickyHeaderIndices={[1]}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.button1}>
                        <Text>view1</Text>
                    </View>

                    <View style={styles.button2} testProp="yk" >
                        <Text>view2</Text>
                    </View>

                    <LeagueList fatherSub={this}  key='testL' style={{flex:0}}/>
                </ScrollView>
        )
        console.warn(a == this.scrollView)
        return a
    }

    _handleMove(e) {
        if (this.contentY != 0) return

        let now = e.nativeEvent.pageY
        let y = now - this.startTouchY
        if (y <=0 ) return

        y = y > 200 ? 200 : y
        y = y * Math.sin(y * 0.00785) * 0.5
       this.subList.scrollTo({x: 0, y: -y, animated: false, })
    }
    _handleEnd(e) {
        if (this.contentY != 0) return
        this.subList.scrollTo({x: 0, y: 0, animated: true, })
    }

    _handleScroll(e, type) {
        this.contentY = e.nativeEvent.contentOffset.y
    }
}

const styles = StyleSheet.create({

    scrollContent: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    button: {
        marginTop: 5,
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        borderRadius: 3,
        width: 320,
        height: 40,
        justifyContent:'center',
    },

    button1: {
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        borderRadius: 3,
        width: 320,
        height: 140,
        justifyContent:'center',
        marginBottom:5,
    },

    button2: {
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        borderRadius: 3,
        width: 320,
        height: 40,
        justifyContent:'center',
    },

})