/**
 * Created by pwrd on 16/7/4.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    TabBarIOS,
    Text,
    View,
    NavigatorIOS,
    ListView,
    ScrollView,
    RefreshControl,

} from 'react-native';

import CommonComponent from './commonComponent'

export default class TitleScroll extends Component {
    constructor(props) {
        super(props)
        this.startTouchY = 0
        this.contentY = 0

        this.ds = new ListView.DataSource({rowHasChanged: props.rowHasChanged})
        this.state = {
            renderList: this.ds.cloneWithRows(props.dataArray),
            refreshing: props.dataArray.length != 0 ? false : true
        }
        this.originalArray = props.dataArray
    }

    componentDidMount() {
        if (this.state.renderList.getRowCount() == 0) {
            this.props.refreshFunc(this.originalArray, (newArray) => {
                newArray = newArray ? newArray : []
                this.setState({
                    renderList: this.ds.cloneWithRows(newArray),
                    refreshing: newArray.length != 0 ? false : true
                })
                this.originalArray = newArray
            })
        }
    }

    render() {
        const childArray = React.Children.toArray(this.props.children)

        return (
            <ScrollView
                ref={comp => this.scrollView = comp}
                contentContainerStyle={styles.scrollContent}
                automaticallyAdjustContentInsets={false}
                bounces={false}
                scrollEventThrottle={500}
                onMomentumScrollEnd={e=> this._setContentY(e)}
                onScrollEndDrag={e => this._setContentY(e)}
                onTouchStart={e => this.startTouchY = e.nativeEvent.pageY}
                onTouchMove={e => this._handleMove(e)}
                onTouchEnd={e => this._handleEnd(e)}
                onScroll={e => this._setContentY(e)}
                stickyHeaderIndices={[1]}
                showsVerticalScrollIndicator={false}
            >
                {childArray}

                <View style={{height:0, overflow:"hidden", justifyContent:'center', flexDirection:'column'}} ref={comp =>this.refreshComp = comp}>
                    <Text>loding....</Text>
                </View>

                {this.state.refreshing ? CommonComponent.loadData({marginTop: 60}) : <ListView
                    ref={comp => this.subList = comp}
                    dataSource={this.state.renderList}
                    renderRow={(ele) => this.props.renderRow(ele)}
                    showsVerticalScrollIndicator={true}
                />}
            </ScrollView>
        )
    }

    _handleMove(e) {
        if (this.contentY != 0) return
        if (this.state.renderList.getRowCount() == 0) return

        let now = e.nativeEvent.pageY
        let y = now - this.startTouchY
        if (y <= 0) return

        y = y > 200 ? 200 : y
        y = y * Math.sin(y * 0.00785) * 0.5
        //this.subList.scrollTo({x: 0, y: -y , animated: false,})
        this.refreshComp.setNativeProps({
            style:{
                height:y
            }
        })
    }

    _handleEnd(e) {
        if (this.contentY != 0) return
        //this.subList.scrollTo({x: 0, y: 0, animated: true,})
        this.refreshComp.setNativeProps({
            style:{
                height:0
            }
        })
    }

    _setContentY(e) {
        this.contentY = e.nativeEvent.contentOffset.y
    }

}

const styles = StyleSheet.create({
    scrollContent: {
        flexDirection: 'column',
        alignItems: 'center',
    },

})