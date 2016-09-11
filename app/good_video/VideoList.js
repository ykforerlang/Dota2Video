/**
 * Created by pwrd on 16/8/24.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Dimensions,
    RefreshControl,
    TouchableHighlight,
} from 'react-native';

import Orientation from 'react-native-orientation'
import Video from './Video'

import commonComponent from '../common/commonComponent'
import Util from '../common/util'
import * as goodVideoAction from '../actions/goodVideo'

const {width} = Dimensions.get('window');
class VideoList extends React.Component {
    constructor(props) {
        super(props)

        this._ds = new ListView.DataSource({
            rowHasChanged: ((r1, r2) => r1 !== r2),
            sectionHeaderHasChanged: ((s1, s2) => s1 !== s2),
        })

        this._holdSpace = <View style={styles.videoLastPlace}>
            <Text style={styles.title}/>
        </View>

        this.navigator = props.navigator
    }

    componentDidMount() {
        const {actions, init} = this.props
        if (!init) {
            actions.initReq()
        }
    }


    render() {
        const {init, pullRefreshing, items} = this.props

        if (!init) {
            return commonComponent.loadData()
        }
        return (
            <ListView
                style={{marginTop:30,}}
                contentContainerStyle={styles.content}
                initialListSize={10}
                dataSource={this._ds.cloneWithRowsAndSections(items)}
                renderRow={this._renderRow.bind(this)}
                renderSectionHeader={(sectionData, sectionID) => this._renderHeader(sectionData, sectionID)}
                showsVerticalScrollIndicator={true}
                removeClippedSubviews={true}
                onEndReachedThreshold={300}
                scrollRenderAheadDistance={500}
                onEndReached={this._endReached.bind(this)}
                pageSize={2}
                automaticallyAdjustContentInsets={false}
                refreshControl={
                    <RefreshControl
                        refreshing={pullRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                    />
                }
            />
        )
    }

    _renderRow(rowData) {
        if (rowData == "__holdSpace") {
            return this._holdSpace
        }

        return (
            <TouchableHighlight onPress={() => this._renderVideo(rowData)}
                                style={styles.thouchVideo}
                                underlayColor="#888888"
            >
                <View>
                    <Image source={{uri: rowData.thumb}}
                           style={styles.thumb}/>
                    <Text style={styles.title} numberOfLines={2}>{rowData.title}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    _renderHeader(sectionData, sectionID) {
        return <Text style={styles.sectionTitle}>{sectionID}</Text>
    }

    _renderVideo(rowData) {
        this.navigator.push({
            component: Video,
            videoId: rowData.videoId
        })
    }

    _onRefresh() {
        const {actions} = this.props
        actions.fetchPullReq()
    }

    _endReached() {
        const {actions} = this.props
        actions.fetchScrollDownReq()
    }

    static resizeEle(ele) {
        const result = {}
        for (let key in ele) {
            if (ele[key].length % 2 != 0) {
                result[key] = ele[key].concat(["__holdSpace"])
            } else {
                result[key] = ele[key]
            }
        }
        return result
    }

}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 40,
    },
    thouchVideo: {
        marginBottom: 10,
        marginRight: 5,
        marginLeft: 5,
        overflow: 'hidden',
        backgroundColor: '#e0e0e0',
    },
    videoLastPlace: {
        marginBottom: 10,
        marginRight: 5,
        marginLeft: 5,
        overflow: 'hidden',
        opacity: 0,
    },
    sectionTitle: {
        width: width - 20,
        overflow: 'hidden',
        fontSize: 15,
        fontWeight: '600',
        padding: 10,
        backgroundColor: '#c0c0c0',
        marginBottom: 5,
    },
    thumb: {
        height: 80,
        width: 140,
    },
    title: {
        width: 140,
    }

})

export default Util.ReduxComponent(state =>  {
    const goodVideo = state.goodVideo
    if (!goodVideo) {
        return {
            init: false,
            pullRefreshing: false,
            items: null
        }
    } else {
        return {
            init: true,
            pullRefreshing:goodVideo.pullRefreshing,
            items:VideoList.resizeEle(goodVideo.items),
        }
    }
}, goodVideoAction, VideoList)